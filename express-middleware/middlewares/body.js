//function cek object kosong
function isEmpty(obj) {
	return !obj || Object.keys(obj).length === 0
}

module.exports = (req, res, next) => {
	// Jika req.body kosong maka next() atau skip middleware
	if (isEmpty(req.body)) {
		res.send("Request Body Kosong");

	} else {
		console.log(req.body)
		console.log("Body");
	}
	next()
	
	// JIka tidak kosong, maka Request body akan ditampilkan
	
}

