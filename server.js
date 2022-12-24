const express = require('express');
const bodyparser = require('body-parser');

const cors = require('cors');

const googleTrends = require('google-trends-api');

const app = express();

app.use(cors());

const PORT = 3001;

let trends = [];

googleTrends.dailyTrends({
    trendDate: new Date(),
    geo: 'US'
}, (err, results) => {
    if (err) {
        console.log(err);
    } else {

        app.post("/trends", (req, res) => {
            res.send(results)
        })

        app.get("/trends", (req, res) => {
            res.send(results)
        })

    }
});





app.listen(PORT, () => {
    console.log("Serverrunning on", PORT);
})