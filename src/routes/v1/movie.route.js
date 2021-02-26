const express = require('express');
const auth = require('../../middlewares/auth');
const axios = require('axios');

const router = express.Router();

router.post('/random', auth(), async (req, res) => {
  try {
    console.log('QUERY:', req.body.query);

    const api = await axios({
      method: 'get',
      url: `https://api.themoviedb.org/3${req.body.query}`,
      headers: {
        Authorization: 'Bearer ' + process.env.VUE_APP_TMDB_API_KEY,
      },
    });
    const chosenMovie = api.data.results[Math.floor(api.data.results.length * Math.random())];
    res.json({ chosenMovie });
    console.log(api.data);
  } catch (error) {
    console.log(error);
  }
});

router.get('/configuration', auth(), async (req, res) => {
  try {
    const api = await axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/configuration',
      headers: {
        Authorization: 'Bearer ' + process.env.VUE_APP_TMDB_API_KEY,
      },
    });
    res.json({ configuration: api.data });
  } catch (error) {
    console.log(error);
  }
});

router.get('/single/:id', auth(), async (req, res) => {
  try {
    const api = await axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/${req.params.id}`,
      headers: {
        Authorization: 'Bearer ' + process.env.VUE_APP_TMDB_API_KEY,
      },
    });
    res.json({ movie: api.data });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
