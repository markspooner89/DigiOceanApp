const express = require("express");

const app = express();

app.get('/', (_, res) => res.send("hello!"));

app.listen(80, () => console.log("App is listening on port 80"));