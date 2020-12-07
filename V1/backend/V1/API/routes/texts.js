const express = require("express");
const router = express.Router();
const joi = require("joi");
const Text = require("../models/text");
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

router.get("/:title", (req, res) => {
	Text.getPublicText(req.params.title, (err, data) => {
		res.json(data);
	});
});

//Get Texts

router.get("", (req, res) => {
	Text.getPublicTexts((err, data) => {
		res.json(data);
	});
});

//Post Text

router.post("", passport.authenticate('jwt', { session: false }), (req, res) => {

	let text = req.body;
	text["author"] = req.user.name;

	Text.createText(text,(err)=>{
		if (err) { res.json({"err":true, "msg":err}); return;}
		res.json({"err":false, "msg":"success"});
	});
});


module.exports = router;