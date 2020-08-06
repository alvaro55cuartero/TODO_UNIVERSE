const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Get News"
  });
});

router.get("/:id", (req, res, next) => {

  res.status(200).json({
    message: "Get News " + req.params.id
  });
});


router.post("/", (req, res, next) => {
  console.log(req.body);
  const a = {
    body: req.body.name
  };
  res.status(200).json({
    message: "Post News",
    body: a
  });
});

module.exports = router;
