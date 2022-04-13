require('dotenv').config()
const path = require('path')
const multer = require('multer')

// multer configuration
const storage = multer.diskStorage({
	destination: './uploads/',
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`)
	}
})

const multerInstance = multer({storage: storage})

const uploadSingleImage = (req, res, next) => {
	const upload = multerInstance.single("image")
	upload(req, res, (err) => {
		if (err) {
			return next(err)
		}

		return next()
	})
}

//multi upload
const uploadMultiImage = (req, res, next) => {
	const upload = multerInstance.array("image", 5)
	upload(req, res, (err) => {
		if (err) {
			return next(err)
		}

		return next()
	})
}

// single upload with data
const uploadSingleImageWithData = (req, res, next) => {
	const upload = multerInstance.single("image")

	upload(req, res, (err) => {
		const {name, email} = req.body
		console.log(name, email);

		if (err) {
			return next(err)
		}

		return next()
	})
}

module.exports = {
	uploadSingleImage,
	uploadMultiImage,
	uploadSingleImageWithData
}