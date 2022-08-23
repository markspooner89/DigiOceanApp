const express = require("express");

const path = require("path");

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    console.log(req);
    res.render("index");
});

app.listen(5000, () => console.log("App is listening on port 5000"));