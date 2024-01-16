const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {
    res.send("List of all customers")
})

router.get("/:id", (req, res) => {
    res.send("customer with id " + req.params.id)
})

module.exports = router;