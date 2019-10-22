const express = require("express");
const app = express();

const fruits = [
	{
		name: "apple",
		color: "red",
		readyToEat: true
	},
	{
		name: "pear",
		color: "green",
		readyToEat: false
	},
	{
		name: "banana",
		color: "yellow",
		readyToEat: true
	}
];

// add index route
app.get("/fruits/", (req, res) => {
	res.send(fruits);
});

// add show route
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
	res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(3000, () => {
	console.log("listening");
});
