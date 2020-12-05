const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({

	email: {
		type: String,
		validate: [validator.isEmail, "Email is not correct"],
		required: true,
		unique: true
	},

	password: {
		type: String,
		required: true
	},

	status: {
		type: Number,
		required: true,
		default: 1
	},

	createdAt: {
		type: Date,
		default: Date.now
	}
});



const User = module.exports = mongoose.model("User", UserSchema);


//	Functions


//	GET

module.exports.getPublicUserById = function(userId, callback) {
	User.findById(userId, "email status", callback);
}



//	By query

module.exports.getPublicUser = function(query, callback) {
	User.findOne(query, "email status", callback);
}

// Get all users public info by query

module.exports.getPublicUsersAll = function(callback) {
	User.find({}, "email status", callback);
}

// Get all users public info by query

module.exports.getPublicUsersAll = function(callback) {
	User.find({}, "email status", callback);
}

// Get user private info by id

module.exports.getPrivateUserById = function(userId, callback) {
	User.findById(userId, "email status password", callback);
}



// Get user private info by query

module.exports.getPrivateUser = function(email, callback) {
	User.findOne({email: email}, callback)
}


// CREATE


// new user

module.exports.createUser = function(user, callback) {
 
	bcrypt.hash(user.password, 10, (err, hash) => {
		
		if (err) {

			callback(err);

		} else {

			user.password = hash;
			_user = new User(user);
			_user.save(callback);

		}
	});
}


// DELETE


// UPDATE


