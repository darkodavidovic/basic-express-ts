//@ts-nocheck

// import fs from "fs";
import fse from "fs-extra";
import { Request, Response } from "express";

import PDFParser from "pdf2json";

export const pdfService = async (req: Request, res: Response) => {
	try {

		if (!req.files || Object.keys(req.files).length === 0) {
			return res.status(400).send('No files were uploaded.');
		}

		const pdfFile = req.files.pdfFile;

		if (!pdfFile.mimetype.includes('pdf')) {
			return res.status(400).send('Only PDF files are allowed.');
		}

		fse.ensureDirSync(__dirname + '/uploads');

		const filePath = __dirname + '/uploads/' + pdfFile.name;

		pdfFile.mv(filePath, async (err) => {
			if (err) return res.status(500).send(err);
			const xmlString = await pdfToXml(filePath);
			res.set('Content-Type', 'application/xml');
			res.set('Content-Disposition', 'attachment; filename="downloaded.xml"');

			// Send the XML string as the response
			res.send(xmlString);
		});

	} catch (error) {
		console.log("pdf.service error:", error);
		res.status(500).json({ done: false, message: error })
	}
}

async function pdfToXml(filePath: string) {

	return new Promise((resolve, reject) => {

		const pdfParser = new PDFParser(this, 1);

		pdfParser.loadPDF(filePath);

		pdfParser.on("pdfParser_dataError", _errData => reject(false));

		pdfParser.on("pdfParser_dataReady", pdfData => {

			// const rawText = pdfParser.getRawTextContent()
			// console.log(rawText);
			// const texts1 = pdfData.Pages[0].Texts.map(text => decodeURIComponent(text.R[0].T));
			// const texts2 = pdfData.Pages[1].Texts.map(text => decodeURIComponent(text.R[0].T));
			// fs.writeFileSync("content1.txt", JSON.stringify(texts1, null, 4));
			// fs.writeFileSync("content2.txt", JSON.stringify(texts2, null, 4));

			let errors = 0;

			const page1Texts = pdfData.Pages[0].Texts.map(text => decodeURIComponent(text.R[0].T));

			// ======================== HEADER ======================== //
			const header = {
				brojIzvoda: "",
				datumIzvoda: "",
			}

			try {
				header.brojIzvoda = page1Texts[page1Texts.findIndex(text => text.includes("IZVOD BR"))].split(".")[1].trim()
			} catch (error) {
				errors++;
			}

			try {
				header.datumIzvoda = page1Texts[page1Texts.findIndex(text => text.includes("NA DAN"))].split(" ").at(-1).split(".").reverse().join("-");
			} catch (error) {
				errors++;
			}

			// console.log(header);

			// ======================== XML ======================== //

			let blockLength = 0;

			function prepareBlock(foundBlock) {
				const block = []
				let currentRow = []
				for (const word of foundBlock) {
					// if word starts with a number and the current row is not empty, push the current row to the block
					if (word.length === 1 && word !== " " && currentRow.length > 0) {
						// make currentRow be unique set of values
						// currentRow = [...new Set(currentRow)]
						block.push(currentRow)
						currentRow = []
					}
					// if word is not first index number, push the word to the current row
					else if (word.length > 1 || word === " ") {
						currentRow.push(word)
					}
				}
				// last row has no number to finish the last row, we checking it manually
				if (currentRow.length > 0) {
					block.push(currentRow)
					currentRow = []
				}
				blockLength += block.length
				// console.log(block.length)
				// console.log(block)
				return block
			}

			let xmlRows = ""

			function makeXMLRows(block) {
				for (let i = 0; i < block.length; i++) {
					// date index finder
					let lastDateIndex = 0
					const datePattern = /^\d{2}\.\d{2}.\d{4}$/;
					for (let z = 0; z < block[i].length; z++) {
						if (datePattern.test(block[i][z])) {
							lastDateIndex = z
						}
					}
					// amount finder
					let firstAmount = block[i][lastDateIndex + 1]
					const noFirstAmount = firstAmount === "0.00"
					let secondAmount = block[i][lastDateIndex + 3]

					if (firstAmount.includes(",")) {
						firstAmount = firstAmount.replace(",", "")
					}
					if (secondAmount.includes(",")) {
						secondAmount = secondAmount.replace(",", "")
					}

					xmlRows += `<stmttrn>
							<benefit>debit</benefit>
							<payeeinfo>
								<name></name>
								<city></city>
							</payeeinfo>
							<payeeaccountinfo>
								<acctid>908-0000000020501-70</acctid>
								<bankid>908</bankid>
								<bankname>NARODNA BANKA SRBIJE</bankname>
							</payeeaccountinfo>
							<dtposted>${header.datumIzvoda}T00:00:00</dtposted>
							<trnamt>${noFirstAmount ? secondAmount : firstAmount}</trnamt>
						</stmttrn>\n`
				}
			}

			for (const page of pdfData.Pages) {

				const texts = page.Texts.map(text => decodeURIComponent(text.R[0].T));

				const stranaIndex = texts.findIndex(text => text.includes("Strana"))
				const strana = texts[stranaIndex] + texts[stranaIndex + 1]

				if (strana === "Strana 1") {
					const transakcijeIndex = texts.findIndex(text => text.includes("transakcije"))
					const foundBlock = texts.slice(transakcijeIndex + 1, texts.length)
					// console.log("block1", foundBlock)
					const block = prepareBlock(foundBlock)
					makeXMLRows(block)
				}

				if (strana === "Strana 2") {
					const firstBlankSpaceIndex = texts.findIndex(text => text.includes("Ukupno za")) - 1
					const foundBlock = texts.slice(stranaIndex + 2, firstBlankSpaceIndex)
					// console.log("block2", foundBlock)
					const block = prepareBlock(foundBlock)
					makeXMLRows(block)
				}

			}

			let xmlData = `<?xml version="1.0" encoding="utf-8"?>
						<stmtrs
							xmlns="urn:ppuz-schema"
							xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
							
							<stmtnumber>${header.brojIzvoda}</stmtnumber>
							
							<trnlist count="${blockLength}">
								${xmlRows}
							</trnlist>
							<rejected count="0"></rejected>
						</stmtrs>`;

			// console.log(xmlData)
			// fs.writeFileSync("xml.xml", xmlData, "utf-8");
			resolve(xmlData)
		});

	}) // end promise
}// end of getXML