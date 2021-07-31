const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

//Import routers
const spoonacularRouter = require('./routes/spoonacular.router');
const mealdbRouter = require('./routes/mealdb.router');

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('build'));

//Routes
app.use('/api/spoonacular', spoonacularRouter);
app.use('/api/mealdb', mealdbRouter);

//Listen
app.listen(PORT, () => {
    console.log('Listening on PORT', PORT);
});