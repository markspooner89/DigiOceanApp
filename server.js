const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const axios = require("axios");

const app = express();

app.use(favicon(__dirname + "/icons8-circled-m-32.png"));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const formatName = unformattedName => { 
    var nameLength = unformattedName.length;
    var firstChar = unformattedName.substring(0, 1);
    var otherChars = unformattedName.substring(1, nameLength);
    var formattedName = firstChar.toUpperCase() + otherChars;
    return formattedName;
};

app.get("/", async (_, res) => {
    const response =  await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0");
    const results = response.data.results.map((pokemon, index) => {
        return {
            id: (index + 1),
            name: formatName(pokemon.name),
            url: `/pokemon?id=${(index + 1)}`
        };
    });

    res.render("index", { results });
});


app.get("/pokemon", async (req, res) => {
    const id = parseInt(req.query.id);
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const result = {
        name: formatName(response.data.name),
        sprite: response.data.sprites.front_default
    };

    res.render("pokemon", { result });
});

app.listen(5000, () => console.log("App is listening on port 5000"));