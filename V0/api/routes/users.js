const express = require("express");
const router = express.Router();
const User = require("../../models/user");


router.post("/register", (req, res, next) => {
  let newUser = new User({
    name:req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err) => {
    if (err) {
      res.json({success: false, msg: "Failed to register user"});
    } else {
      res.json({succes: true, msg: "User register"});
    }
  });

});

router.post("/authenticate", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getuserByUsername(username, (err, uer) => {
    if (err) throw err;
    if (!user) {
      return res.json({success: false, msg: "User not found"});
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(user, config.secret);
      }
    });
  });
});

router.get("/profile", (req, res, next) => {
  res.send("Profile");
});

module.exports = router;
