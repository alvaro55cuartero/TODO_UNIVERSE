const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({

    name: {
        type: String,
        min: [4, "Name is too short"],
        max: [40, "Name is too long"],
        required: [true, "Name is required"],
        unique: true
    },

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
        type: String,
        required: true,
        default: "User"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});



const User = module.exports = mongoose.model("User", UserSchema);


//Functions


// GET USER PUBLIC INFO

module.exports.getUser = function(userId, callback) {
    User.findById(userId, (err, user)=>{

        let publicUser = {
            name: user.name,
            status: user.status
        };

        callback(err, publicUser);
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