const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const CharacterSchema = mongoose.Schema({

	name: {
		type: String,
		min: [4, "Name is too short"],
		max: [20, "Name is too long"],
		required: [true, "Name is required"],
	},

	lastName: {
		type: String,
		min: [4, "Last name is too short"],
		max: [20, "Last name is too long"],
		required: [true, "Name is required"],
	},
	
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		require: true
	},

	owners: {
		type: Array
	},

	status: {
		type: Number,
		required: true,
		default: 0
	},

	createdAt: {
		type: Date,
		default: Date.now
	}
});

const Character = module.exports = mongoose.model("Character", CharacterSchema);



// Functions

// CREATE

module.exports.createCharacter = function(character, callback) {
	_character = new Character(character);
	_character.save(callback);
}

// GET

module.exports.getPrivateCharacters = function(callback) {
	Character.find(callback);
}

module.exports.getPublicCharacters = function(callback) {
	Character.find({}, "name status", callback);
}

// UPDATE

// DELETE

module.exports.deleteCharacterByName = function(name, callback) {
	Character.deleteOne({name: name}, callback);
}








