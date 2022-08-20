const express = require("express");

const path = require("path");

const app = express();

app.get("/", (_, res) => {
    const filePath = path.join(__dirname, "index.html");
    res.sendFile(filePath);
});

app.listen(5000, () => console.log("App is listening on port 5000"));