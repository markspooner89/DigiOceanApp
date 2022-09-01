const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");

const app = express();

app.use(favicon(__dirname + "/icons8-circled-m-32.png"));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const axios = require("axios");

const getPokemon = async offset => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${1}`);
    return response.data.results;
};

app.get("/", async (req, res) => {
    let currentIndex = 0;
    if (req.query.offset) {
        currentIndex = parseInt(req.query.offset);
    }
    res.render("index", {
        pokemon: await getPokemon(currentIndex),
        nextIndex: currentIndex + 1,
        previousIndex: currentIndex - 1,
        showPreviousButton: currentIndex > 0,
        showNextButton: currentIndex < 251
    });
});

app.listen(5000, () => console.log("App is listening on port 5000"));