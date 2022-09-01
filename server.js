const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");

const app = express();

app.use(favicon(__dirname + "/icons8-circled-m-32.png"));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const axios = require("axios");

const getPokemon = async number => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${number}/`);
    return response.data;
};

app.get("/", async (req, res) => {
    let requestedNumber = parseInt(req.query.number);
    let selectedNumber = 1;
    if (requestedNumber) selectedNumber = requestedNumber;
    let returnObj = {
        pokemon: await getPokemon(selectedNumber),
        currentNumber: selectedNumber,
        nextNumber: selectedNumber + 1,
        previousNumber: selectedNumber - 1,
        showPreviousButton: selectedNumber > 1,
        showNextButton: selectedNumber < 10
    };
    console.log(returnObj);
    res.render("index", returnObj);
});

app.listen(5000, () => console.log("App is listening on port 5000"));