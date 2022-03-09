const express = require('express')
const port = 3000

const app = express()

app.get('/', (req, res) => {
	res.send("Home Page")
})

app.listen(port, () => {
	console.log(`Server berjalan pada port ${3000}`)
})