const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const TextSchema = mongoose.Schema({

	title: {
		type: String,
		min: [4, "Name is too short"],
		max: [40, "Name is too long"],
		required: [true, "Name is required"],
		unique: true
	},
	author: {
		type: String,
		required: true,
		unique: true
	},
	text: {
		type:String,
		required: true
	},
	synopsis: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true,
		default: "WIP"
	}
});



const Text = module.exports = mongoose.model("Text", TextSchema);


//Functions



// Get user public info by id

module.exports.getPrivateTexts = function(callback) {
	Text.find(callback);
}

module.exports.getPublicTextById = function(id, callback) {
	Text.findOne({_id:id}, (err, data)=>{
		let publicText = {
			title: data.title,
			text: data.text,
			synopsis: data.synopsis,
			author: data.author
		}
		callback(err, publicText);
	});
}

module.exports.getPublicTexts = function(callback) {
	Text.find({},"title text synopsis author",(err, data)=>{
		callback(err, data);
	});
}

module.exports.getPublicText = function(title, callback) {
	Text.findOne({title: title}, (err, data)=>{
		let publicText = {
			title: data.title,
			text: data.text,
			synopsis: data.synopsis,
			author: data.author
		}
		callback(err, publicText);
	});
}

module.exports.createText = function(text, callback) {
	console.log();
	_text = new Text(text);
	_text.save(callback);
}
