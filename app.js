
const express = require('express');
const rateLimit = require('express-rate-limit');
const myMw = require('./myMw');
const myEmployeeRoutes = require("./routes/Mitarbeiter");
const myCustomerRoutes = require("./routes/Kunde");
const myAdditionRoutes = require("./routes/addition");
const mySubstractionRoutes = require("./routes/substraction");
const myDivisionRoutes = require("./routes/division");
const myMultiplicationRoutes = require("./routes/multiplication");

const app = express();

const EXP_PORT = 8080;

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 50,
    message: "Zu viele Anfragen",
});

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use("/api/", limiter);
app.use("/api/", myMw);
app.use("/api/mitarbeiter", myEmployeeRoutes);
app.use("/api/kunde", myCustomerRoutes);
app.use("/api/addition", myAdditionRoutes);
app.use("/api/substraction", mySubstractionRoutes);
app.use("/api/division", myDivisionRoutes);
app.use("/api/multiplication", myMultiplicationRoutes);

app.listen(EXP_PORT, () => {
    console.log(`Server running on port ${EXP_PORT}`);
});
