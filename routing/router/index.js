const express = require("express") // import express
const bodyParser = require("body-parser") // import body-parser


const router = express.Router() // membuat instance router
const app = express()

router.get("/", (req, res, next) => {
	res.send("Goodbye, Ali")
})

router.post(
	"/",
	bodyParser.json(),
	bodyParser.urlencoded({ extended: false }),
	(req, res, next) => {
		res.send(req.body)
	}
)

router.delete("/:id", (req, res, next) => {
	res.send(`Data dengan id ${req.params.id} telah dihapus`)
})

router.delete('/', (req, res, next) => {
	res.send(`Masukan dulu ID nya`)
})

module.exports = router 


