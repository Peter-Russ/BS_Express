const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {
    res.send("List of all employees")
})

router.get("/:id", (req, res) => {
    res.send("Employee with id " + req.params.id)
})

module.exports = router;