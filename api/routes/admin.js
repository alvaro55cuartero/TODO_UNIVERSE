const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Get Admin"
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Post Admin"
  });
});

module.exports = router;
