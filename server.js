const express = require("express");
const path = require("path");

const app = express();

app.get("/", (_, res) => res.sendFile(path.join(__dirname, "index.html")));

app.listen(80, () => console.log("App is listening on port 80"));