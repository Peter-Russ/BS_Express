const express = require('express')
const router = express.Router();

router.get("/:dividend/:divisor", (req, res, next) => {
    const { dividend, divisor } = req.params;
    const div = (Number(dividend) / Number(divisor)).toFixed(2);
    res.send(`Quotient: ${div}`);
})

module.exports = router; 
