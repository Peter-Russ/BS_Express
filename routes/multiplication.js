const express = require('express')
const router = express.Router();

router.get("/:zahl/:multiplikator", (req, res, next) => {
    const { zahl, multiplikator } = req.params;
    const multi = (Number(zahl) * Number(multiplikator)).toFixed(2);
    res.send(`Produkt: ${multi}`);
})

module.exports = router; 