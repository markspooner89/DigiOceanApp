const express = require("express");

const app = express();

app.get("/", (_, res) => res.send("hi"));

app.listen(5000, () => console.log("App is listening on port 5000"));