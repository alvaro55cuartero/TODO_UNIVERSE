const express = require("express");
const router = express.Router();

router.get("/", (req, res, next)=>{
    console.log("aj");
    res.send("ha");
});


module.exports = router;