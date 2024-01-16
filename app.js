const express = require('express');

const app = express();

const EXP_PORT = 8080;

app.use(express.static('public'));

app.listen(EXP_PORT, () => {
    console.log(`Server running on port ${EXP_PORT}`);
})