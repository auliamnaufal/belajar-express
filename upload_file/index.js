require('dotenv').config()
const { Router } = require('express')
const express = require('express')
const path = require('path')

const app = express()
const uploadRoutes = require('./routes/upload')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// middlware untuk menentukan folder public
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)))

app.use(uploadRoutes)

// Router

app.use((req, res, next) => {
	res.status(404).send({
		message: "routing tidak ditemukan"
	})
})

app.use((err, req, res, next) => {
	console.log(err.stack);
	res.status(500).send({
		message: err.message
	})
})

app.listen(process.env.PORT, () => {
	console.log(`server berjalan di port ${process.env.PORT}`)
})

