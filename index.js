const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

const randomImgUrl = 'https://picsum.photos/200';
const randomKJokeUrl = 'https://api.chucknorris.io/jokes/random';

const getRandomImgData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch(err) {
        console.log('ERROR OCCURED:', err);
    }
};

const getRandomJokeData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch(err) {
        console.log('ERROR OCCURED:', err);
    }
};

app.get('/random-image', async (req, res) => {
    const imgData = await getRandomImgData(randomImgUrl);
    res.json(imgData); 
});


app.get('/random-joke', async (req, res) => {
    const jokeData = await getRandomJokeData(randomKJokeUrl);
    console.log(jokeData);
    res.json(jokeData);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});