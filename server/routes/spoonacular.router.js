const express = require('exress');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const spoonacularKey = process.env.apiKey

router.get('/textSearch', (req,res) => {
    const searchQuery = req.query.q;

    axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&number=5&apiKey=${spoonacularKey}`)
    .then(results => {
        console.log('Spoonacular querySearch results', results);
        res.send(results);
    }).catch(error => {
        console.log('error query searching spoonacular', error);
        res.sendStatus(500);
    });
});


router.get('/recipe/:id', (req,res) => {
    const recipeId = req.params.id;

    axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${spoonacularKey}`)
    .then(results => {
        console.log('Spoonacular recipeId results', results);
        res.send(results);
    }).catch(error => {
        console.log('error getting recipe based on id', error);
    });
});

module.exports = router;