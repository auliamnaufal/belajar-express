const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

// create an array filled with dummy data
const dummyData = [
  {
    id: 1,
    name: "Ali",
    age: 20,
    address: "Jakarta",
    hobby: "Gaming",
  },
  {
    id: 2,
    name: "Budi",
    age: 30,
    address: "Bandung",
    hobby: "Coding",
  },
  {
    id: 3,
    name: "Caca",
    age: 40,
    address: "Surabaya",
    hobby: "Traveling",
  },
];

// get all data
router.get("/user", (req, res, next) => {
  res.status(200).json({
    message: "Success get all data",
    body: dummyData,
  });
});

// get data by id
router.get("/user/:id", (req, res, next) => {
  const id = req.params.id;
	let data = {}

	dummyData.forEach((dummy) => {
		if (dummy.id == parseInt(id)) {
			data = dummy
		} 
	})

	if (data == {}) {
		res.status(404).json({
			message: "Data not found",
			id: id,
		})
	}
	else {
		res.status(200).json({
			message: "Success get data by id",
			data: data,
		})
	}
});

// add request with post method
router.post(
	"/user",
	bodyParser.urlencoded({ extended: true }),
	(req, res, next) => {
		const { name, age, address, hobby } = req.body;

		if (!name || !age || !address || !hobby) {
			res.status(400).json({
				message: "Please fill all field",
			});
			return;
		}

		const newData = {
			id: dummyData.length + 1,
			name,
			age,
			address,
			hobby		
	}

	dummyData.push(newData)

	res.send(dummyData)
})

router.delete(
	"/user/:id",
	(req, res, next) => {
		const id = req.params.id;
		let data = {}

		dummyData.forEach((dummy) => {
			if (dummy.id == parseInt(id)) {
				data = dummy
			} 
		})

		if (data == {}) {
			res.status(404).json({
				message: "Data not found",
				id: id,
			})
		}
		else {
			dummyData.splice(dummyData.indexOf(data), 1)
			res.status(200).json({
				message: "Success delete data",
				id: id,
			})
			return next("route")
		}
	}
)

module.exports = router;
