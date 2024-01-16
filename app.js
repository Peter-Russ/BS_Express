
const express = require('express');

const app = express();

const EXP_PORT = 8080;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


app.get("/meineTestanfrage", (req, res) => {
    res.send("Anfrage empfangen");
})

// app.get(/\/[^\/]{3}.*/, (req, res) => {
//     res.send("Anfrage mit mind. drei Zeichen bis zum 1. Slash");
// })

app.get("/kunde/*", (req, res, next) => {
    res.write("Kunde\n");
    next();
})

app.get("/kunde/anfrage", (req, res) => {
    res.write("Kunde und Anfrage");
    res.end();
})

app.get("/abteilung/:abteilungId/kunde/:kundeID", (req, res) => {
    const {kundeID, abteilungId} = req.params;
    const anrede = req.query.anrede ? req.query.anrede : "";
    console.log(req.query.anrede);
    res.send(`Abteilung: ${abteilungId}<br/>Kunde: ${anrede} ${kundeID}`);
    });

    
app.get("/addierer", (req, res) => {
    const {a, b} = req.query;
    const sum = Number(a) + Number(b);
    res.send(`Die Summe ist ${sum}`);
})

app.listen(EXP_PORT, () => {
    console.log(`Server running on port ${EXP_PORT}`);
})