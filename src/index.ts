import express, { Application } from 'express'
import cookieParser from "cookie-parser"
import cors from 'cors'
import privateRouter from './routes/private'
import publicRouter from './routes/public'
import chalk from 'chalk';
import fileUpload from 'express-fileupload';

const app: Application = express()

const PORT = 8888

app.use(cors({
	origin: "*"
}))

app.use(fileUpload());

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.use("/pdfxml/", express.static(__dirname + '/public'))

app.use('/pdfxml/api', publicRouter)
app.use('/pdfxml/api', privateRouter)

app.listen(PORT, () => {
	console.log(
		chalk.white.bold.bgBlue(`API http://localhost:${PORT}/pdfxml/api/'`) + chalk.black.bgGreenBright(' Started!')
	)
})