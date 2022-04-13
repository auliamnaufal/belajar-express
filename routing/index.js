require("dotenv").config()
const express = require("express")
const app = express()


// Routing
const indexRoute = require("./router/index")
const userRoute = require("./router/user")

app.use(
	'/', 
	indexRoute, 
	userRoute
)


app.listen(process.env.PORT, () => {
	console.log(`listening on port ${process.env.PORT}`)
})