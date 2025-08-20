const express = require("express");
const router = express.Router();

//POSTS
//Index - posts
router.get("/" , (req, res) => {
    res.send("GET for users");
});

//Show - posts
router.get("/:id" , (req, res) => {
    res.send("GET for  show user id");
});

//POST  - posts
router.post("/" , (req, res) => {
    res.send("POST for  show users");
});

//DELETE  - posts
router.post("/:id" , (req, res) => {
    res.send("DELETE for user id");
});

module.exports = router;