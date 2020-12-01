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


//Functions



// Get user public info by id

module.exports.getPublicUserById = function(userId, callback) {

	User.findById(userId, (err, user)=>{

		let publicUser = {
			email: user.email,
			status: user.status
		};
		console.log(publicUser);

		callback(err, publicUser);
	});
}



// Get user public info by query

module.exports.getPublicUser = function(email, callback) {
	User.findOne(user, (err, user)=>{
		let publicUser = {
			email: user.email,
			status: user.status
		};

		callback(err, publicUser);
	});
}

// Get users public info by query

module.exports.getPublicUsers = function(callback) {
	User.find({}, 'username status', callback);
}

// Get user private info by id

module.exports.getPrivateUserById = function(userId, callback) {
	User.findById(userId, (err, user)=>{
		console.log(err);
		let privateUser = {
			email: user.email,
			status: user.status,
			password: user.password
		};

		callback(err, privateUser);
	});
}



// Get user private info by query

module.exports.getPrivateUser = function(email, callback) {
	User.findOne({email: email}, (err, user)=>{
		callback(err, user);
	});
}


// CREATE NEW USER

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
