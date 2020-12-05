const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const NewSchema = mongoose.Schema({

	title: {
		type: String,
		unique: true
	},

	content: {
		type: Array
	},

	createdAt: {
		type: Date,
		default: Date.now
	}
});

const New = module.exports = mongoose.model("New", NewSchema);


// Functions

// CREATE

module.exports.createCharacter = function(character, callback) {
	_character = new New(character);
	_character.save(callback);
}

// GET

module.exports.getPrivateCharacters = function(callback) {
	New.find(callback);
}

module.exports.getPublicCharacters = function(callback) {
	New.find({}, "name status", callback);
}

// UPDATE

// DELETE

module.exports.deleteCharacterByName = function(name, callback) {
	New.deleteOne({name: name}, callback);
}