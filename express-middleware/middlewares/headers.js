module.exports = (req, res, next) => {
	// Menampilkan beberapa data yang disari body-parser
	console.log("METHOD ", req.method)
	console.log("PATH ", req.path);
	console.log("HEADERS ", req.headers);

	next()
}