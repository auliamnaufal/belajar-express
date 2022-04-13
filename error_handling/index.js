require('dotenv').config();
const express = require("express")
const bodyParser = require('body-parser')

const isNumber = require('is-number')

const app = express()

app.post(
	'/',
	bodyParser.urlencoded({extended: true}),
	(req, res, next) => {
		const { a, b } = req.body

		if(!isNumber(a) || !isNumber(b)) {
			next(new Error('a and b must be number'))
		}

		const add = (a, b) => Number(a) + Number(b)
		const result = add(a, b)

		if (result % 10 === 0) {
			next(new Error("Hasil dari a + b adalah kelipatan dari 10"))
		} else {
			res.send({
				message: `Hasil dari a + b adalah ${result}`
			})
		}
	}
)

app.use((req, res, next) => {
	res.status(404).send({
		message: "Halaman tidak ditemukan"
	})
})

app.use((err, req, res, next) => {
	console.log(err.stack)
	res.status(500).send({
		message: "Terjadi masalah pada server"
	})
})

app.listen(process.env.PORT, () => {
	console.log(`server berjalan di port ${process.env.PORT}`)
})