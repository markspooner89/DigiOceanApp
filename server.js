const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");

const app = express();

app.use(favicon(__dirname + "/icons8-circled-m-32.png"));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (_, res) => {
    res.render("index", {
        pageTitle: "Welcome!"
    });
});

app.listen(5000, () => console.log("App is listening on port 5000"));