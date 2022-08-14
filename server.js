const express = require("express");

const app = express();

app.get('/', (_, res) => res.send("hello!"));

app.listen(3000, () => console.log("App is listening on port 3000"));