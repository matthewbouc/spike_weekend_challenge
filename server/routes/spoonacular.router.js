const express = require('exress');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/textSearch', (req,res) => {
    const searchQuery = req.query.q;
    const spoonacularKey = process.env.apiKey

    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularKey}&query=${searchQuery}}&number=5`)
    .then(results => {
        console.log('Spoonacular querySearch results', results);
        res.send(results);
    }).catch(error => {
        console.log('error query searching spoonacular', error);
        res.sendStatus(500);
    });
});