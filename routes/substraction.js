const express = require('express')
const router = express.Router();

router.get("/:minuend/:substrahend", (req, res, next) => {
    const { minuend, substrahend } = req.params;
    const sub = Number(minuend) - Number(substrahend);
    res.send(`Differenz: ${sub}`);
})

module.exports = router; 