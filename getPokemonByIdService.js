const axios = require("axios");

const getPokemonByIdAsync = async id => { 
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);

        var unformattedName = response.data.forms[0].name;
        var nameLength = unformattedName.length;
        var firstChar = unformattedName.substring(0, 1);
        var otherChars = unformattedName.substring(1, nameLength);
        var formattedName = firstChar.toUpperCase() + otherChars;
        
        return {
            name: formattedName,
            sprite: response.data.sprites.front_default
        };
    } catch (error) {
        console.error(error);
        return null;
    }
};

const getPokemonByIdService = {
    getPokemonByIdAsync
};

module.exports = getPokemonByIdService;