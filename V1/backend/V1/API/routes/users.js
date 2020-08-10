const express = require("express");
const router = express.Router();
const joi = require("joi");
const User = require("../models/user");

//SCHEMAS


const UserSignupSchema = joi.object().keys({
    name: joi.string().regex(/^[a-zA-Z\s]{4,30}$/).required(),
    email: joi.string().email().required(),
    password: joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required()
});




//ROUTES

router.get("/profile", (req, res, next)=>{
    
});


router.get("/profile", (req, res, next)=>{

})


router.get("/profile/:id", (req, res, next)=>{
    let id = req.params.id;

    User.getUser(id, (err, user)=>{
        res.send(user);
    });
});


router.post("/signup", (req, res, next)=>{
    let user = req.body;
    const result = UserSignupSchema.validate(user);
    let err = typeof result.error !== 'undefined';
    let msg;
    

    if (err) {
        
        msg = {"err": true, "msg": err ?  result.error : "Success"};
    
    } else {
        
        User.createUser(user, (err) => {

            if (err) {
               
                msg = {"err": true, "msg": err};
            
            } else {
                
                msg = {"err":false , "msg": "User signup"};
            
            }

            res.json(msg);

        });
    }
});


module.exports = router;