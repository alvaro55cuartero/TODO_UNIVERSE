const express = require("express");
const router = express.Router();
const joi = require("joi");
const User = require("../models/user");
const passport = require("../../config/passport");
const bcrypt = require("bcrypt");
const config = require("../../config/database");
const jwt = require("jsonwebtoken");
const { json } = require("express");


//SCHEMAS

const UserSignupSchema = joi.object().keys({
	name: joi.string().regex(/^[a-zA-Z\s]{4,30}$/).required(),
	email: joi.string().email().required(),
	password: joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required()
});


const UserLoginSchema = joi.object().keys({
	email: joi.string().email().required(),
	password: joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required()
});



//ROUTES

//Get Users

router.get("", (req, res) => {
	User.getPublicUsers((err, data) => {
		res.json(data);
	});
});

//Get User Profile

router.post("/profile", passport.authenticate('jwt', { session: false }), 
	(req, res) => {	res.json(req.user); }
);



//Get User Public Profile

router.get("/profile/:id", (req, res, next)=>{
	
	let id = req.params.id;

	User.getPublicUserById(id, (err, user)=>{
		
		res.send(user);
	
	});
});



//User Signup

router.post("/signup", (req, res, next)=>{
	
	let user = req.body;
	const result = UserSignupSchema.validate(user);
	let err = typeof result.error !== 'undefined';
	let msg;
	

	if (err) {
		
		msg = {"err": true, "msg": result.error };
	
	} else {
		
		User.createUser(user, (err) => {

			_err = !(typeof err !== 'undefined');

			msg = {"err": _err , "msg": _err ? err : "User Signup"};

			res.json(msg);
		});
	}
});



//User Login

router.post("/login",(req, res, next) => {
	let user = req.body;
	const result = UserLoginSchema.validate(user);
	let err = typeof result.error !== 'undefined';

	if (err) { res.json({"err": true, "msg": result.error}); return;}

	User.getPrivateUser(user.email, (err, _user) => {
		console.log(_user);

		if (err) { res.json({"err": true, "msg": err }); return;}

		bcrypt.compare(user.password, _user.password, (err, result) => {

			if(err) { res.json({"err": true, "msg": err }); return; };

			let payload = {
				id: _user.id
			};

			console.log(_user);

			var token = jwt.sign(payload, config.secret);
		
			res.json({"err":false, token: "jwt " + token, user: _user});
		});
	});
});


module.exports = router;