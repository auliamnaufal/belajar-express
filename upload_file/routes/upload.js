require('dotenv').config()
const express = require('express')

const {
	uploadSingleImage, 
	uploadMultiImage, 
	uploadSingleImageWithData
} = require('../middleware/upload-image')

const router = express.Router()

router.post("/single-upload", uploadSingleImage, (req, res) => {
	console.log(req.file.filename)
	res.status(200).json({
		message: "File uploaded successfully",
		file: `${process.env.URL}:${process.env.PORT}/${process.env.UPLOAD_DIR}/${req.file.filename}`
	})
})

router.post("/multi-upload", uploadMultiImage, (req, res) => {
	const imageUrls = req.files.map(file => `${process.env.URL}:${process.env.PORT}/${process.env.UPLOAD_DIR}/${file.filename}`)

	res.status(200).json({
		message: "File uploaded successfully",
		files: imageUrls 
	})
})

// single upload with data
router.post("/single-upload-with-data", uploadSingleImageWithData, (req, res) => {

	const { name, email } = req.body

	res.status(200).json({
		message: "File uploaded successfully",
		name, 
		email,
		file: `${process.env.URL}:${process.env.PORT}/${process.env.UPLOAD_DIR}/${req.file.filename}`
	})
}
)

module.exports = router

