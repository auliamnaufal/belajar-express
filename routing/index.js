require("dotenv").config()
const express = require("express")
const app = express()

// Routing
const indexRoute = require("./router/index")

app.use('/', indexRoute)


app.listen(process.env.PORT, () => {
	console.log(`listening on port ${process.env.PORT}`)
})