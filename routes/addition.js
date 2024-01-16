const express = require('express')
const router = express.Router();

router.get("/:addend1/:addend2", (req, res, next) => {
    const { addend1, addend2 } = req.params;
    const sum = Number(addend1) + Number(addend2);
    res.send(`Summe: ${sum}`);
})

module.exports = router; 