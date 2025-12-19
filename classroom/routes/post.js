const express = require("express");
const router = express.Router();

//Posts
// Index- user
router.get("/", (req,res) => {
    res.send("GET for posts");
})

//show - user
router.get("/:id", (req,res) => {
    res.send("GET forposts id");
})

//Post -user
router.post("/", (req,res) => {
    res.send("POST for posts");
})

//DELETE-user
router.delete("/:id", (req,res) => {
    res.send("DELETE for posts ID");
})

module.exports = router;