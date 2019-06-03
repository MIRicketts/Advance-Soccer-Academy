const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
  res.send("Home Sweet Home");
});

router.get("/post", (req, res) => {
  res.send("Post Up");
});

module.exports = router;