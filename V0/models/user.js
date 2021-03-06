const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model("User", UserSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.getuserByUsername = function(username, callback) {
  const query = {username: username}
  User.findOne(callback, query);
}

module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash)=>{
      console.log(newUser.password + " aa");
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}
