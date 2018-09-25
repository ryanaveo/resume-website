const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	github: String,
	skills: Array
});

module.exports = mongoose.model("Project", projectSchema);