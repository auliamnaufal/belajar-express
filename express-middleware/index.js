require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const middleware1 = require('./middlewares/headers')
const middleware2 = require('./middlewares/body')

const app = express()

// Pemanggilan Middleware
app.use('/', bodyParser.json(), middleware1)

// middleware untuk method POST pada url '/'
app.post('/', bodyParser.urlencoded({extended: true}), middleware2)


app.listen(process.env.PORT, () => {
	console.log(`Server bejalan pada port ${process.env.PORT}`)
})
