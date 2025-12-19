const express = require("express");
const router = express.Router();

// Index- user
router.get("/", (req,res) => {
    res.send("GET for users");
});

//show - user
router.get("/:id", (req,res) => {
    res.send("GET for users id");
});

//Post -user
router.post("/", (req,res) => {
    res.send("POST for users");
});

//DELETE-user
router.delete("/:id", (req,res) => {
    res.send("DELETE for users ID");
});

module.exports = router;