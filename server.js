const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const pumpkinData = require('./data/pumpkin.json');
const broccoliData = require('./data/broccoli.json');
const nodejsData = require('./data/nodejs.json');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random()* pumpkinData.Categories['Pumpkin Drinks'].length);
    //console.log(randomIndex); //generating random index
    const randomDrinkRecipe = pumpkinData.Categories['Pumpkin Drinks'][randomIndex]; //kuna on tühik, siis kandilised sulud ja jutumärgid

    res.status(200).json({randomDrinkRecipe});
});

app.get('/pumpkin', (req, res) => {
    res.status(200).json({message: "Got pumpkin?"});
});

app.post('/pumpkin', (req, res) => {
    console.log(req.body);

    if(req.body.username !== 'admin' || req.body.password !== '1234') {
        res.status(200).json({broccoliData});
    } else {
        res.status(200).json({pumpkinData});
    }
    //res.status(200).json({message: "Welcome!"});
});

app.post('/nodejs', (req, res) => {
    console.log(req.body);

    if(req.body.name !== 'rke' || req.body.code !== '143') {
        res.status(200).json({message: "invalid credentials"});
    } else {
        res.status(200).json({nodejsData});
    }
});


app.listen(4000, () => {
    console.log('Server is running on port 4000.');
});