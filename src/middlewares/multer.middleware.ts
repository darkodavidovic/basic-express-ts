import multer from 'multer';

const singleStorage = multer.diskStorage({
	destination: function (_req, _file, cb) {
		cb(null, `uploads/`)
	},
	filename: function (req, file, cb) {
		const regex = /\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/i;
		const match = file.originalname.match(regex);
		if (match) {
			const fileExtension = match[0]; // ".jpg"
			// const uploadedLogoFileName = `${uniqid()}${fileExtension}`
			const uploadedLogoFileName = `logo${fileExtension}`
			// forward uploaded logo name to finalize prisma update with the new image reference
			// req.uploadedLogoFileName = uploadedLogoFileName
			return cb(null, uploadedLogoFileName)
		}
		cb(null, "logo.jpeg")
	}
})

export const mimeTypes = ["image/svg+xml", "image/png", "image/jpg", "image/jpeg", "image/gif"]

export const uploadSingleImageMiddleware = multer({
	storage: singleStorage,
	fileFilter: (req, file, cb) => {
		if (mimeTypes.includes(file.mimetype)) {
			// setting up request state if success or fail
			// req.uploadState = true
			cb(null, true);
		} else {
			// req.uploadState = false
			cb(null, false);
		}
	}
}).single("logo")
