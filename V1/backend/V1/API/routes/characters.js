const express = require("express");
const router = express.Router();
const joi = require("joi");
const Character = require("../models/character");
const passport = require("../../config/passport");
const bcrypt = require("bcrypt");
const config = require("../../config/database");
const jwt = require("jsonwebtoken");


//SCHEMAS

const UserSignupSchema = joi.object().keys({
	name: joi.string().regex(/^[a-zA-Z\s]{4,30}$/).required(),
	email: joi.string().email().required(),
	password: joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required()
});


const UserLoginSchema = joi.object().keys({
	name: joi.string().regex(/^[a-zA-Z\s]{4,30}$/).required(),
	email: joi.string().email().required(),
	password: joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required()
}).or("name", "email");



//ROUTES
//Get Texts

router.get("", (req, res) => {
	console.log("aaaaaaa");
	Character.getPublicCharacters((err, data) => {
		console.log(err);
		res.json(data);
	});
});

//Get Texts

router.get("", passport.authenticate('jwt', { session: false }), (req, res) => {
	if (req.user.status >= 2) {
		Character.getPrivateTexts((err, data) => {
			res.json(data);
		});
	}
	res.json({"a":"a"});
});

//Post Text

router.post("", passport.authenticate('jwt', { session: false }), (req, res) => {
	Character.createCharacter(req.body,(err)=>{
		if (err) { res.json({"err":true, "msg":err}); return;}
		res.json({"err":false, "msg":"success"});
	});
});


module.exports = router;