/**
const express = require('express')
const app = express()

app.enable('case sensitive routing')

app.get('/home', (req, res) => {
	res.send("Hello")
})

app.listen(3000, () => {
	console.log("Server berjalan pada port 3000");
})

*/

// Import dotenv
require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
	// buat kondisi. Jika kita jalankan 5000; port = production; else development
	let status = process.env.PORT == 5000 ? "Production" : "Development"
	res.send(`Hello, We're in ${status}`);
})

app.listen(process.env.PORT, () => {
	console.log(`Anda menggunakan port ${process.env.PORT}`);
})
