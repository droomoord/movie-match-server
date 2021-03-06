const express = require('express');
const axios = require('axios');
const auth = require('../../middlewares/auth');
const { User } = require('../../models');
const moment = require('moment');

const router = express.Router();

function randomDate() {
  return moment(new Date(+new Date() - Math.floor(Math.random() * 1.5 * 10 ** 12))).format('YYYY-MM-DD');
}

function chooseOneMovieFromMany(movies) {
  return movies[Math.floor(movies.length * Math.random())];
}

function movieNotRatedYet(chosenMovie, user) {
  if (
    user.likes.some((movie) => movie.id === chosenMovie.id) ||
    user.dislikes.some((movie) => movie.id === chosenMovie.id) ||
    user.favourites.some((movie) => movie.id === chosenMovie.id) ||
    user.seen.some((movie) => movie.id === chosenMovie.id)
  ) {
    return false;
  }
  return true;
}

async function fetchMovies() {
  const dateMax = randomDate();
  const dateMin = moment(dateMax).subtract(1, 'years').format('YYYY-MM-DD');
  console.log(`Looking for a movie with release date between ${dateMin} and ${dateMax}`);
  try {
    return await axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/discover/movie?vote_average.gte=6&vote_count.gte=1000&primary_release_date.gte=${dateMin}&primary_release_date.lte=${dateMax}`,
      headers: {
        Authorization: 'Bearer ' + process.env.VUE_APP_TMDB_API_KEY,
      },
    });
  } catch (error) {
    return error;
  }
}

function chooseMovie(api, user, res, req) {
  let chosenMovie;
  let success = false;
  for (let i = 1; i <= api.data.results.length * 10; i += 1) {
    // console.log('round ' + i);
    chosenMovie = chooseOneMovieFromMany(api.data.results);
    if (movieNotRatedYet(chosenMovie, user)) {
      console.log(`Taking result with index ${api.data.results.indexOf(chosenMovie)}`);
      console.log(`Movie: ${chosenMovie.title} / id: ${chosenMovie.id}`);
      res.json({ chosenMovie });
      success = true;
      break;
    }
    // console.log('looking for another index');
  }
  if (!success) {
    console.log('fetching new data array...');

    setTimeout(async () => {
      try {
        const api = await fetchMovies(req);
        console.log('number of results: ', api.data.results.length);
        if (api.data.results.length > 0) {
          chooseMovie(api, user, res, req);
        } else {
          console.log('NO RESULTS. fetch again');
          setTimeout(async () => {
            const api = await fetchMovies(req);
            console.log('number of results: ', api.data.results.length);
            chooseMovie(api, user, res, req);
          }, 500);
        }
      } catch (error) {
        console.log(error);
      }
    }, 500);
  }
}

router.post('/random', auth(), async (req, res) => {
  try {
    const user = await User.findById(req.user.id, 'likes dislikes favourites seen');
    let api = await fetchMovies(req);
    console.log('number of results: ', api.data.results.length);
    if (api.data.results.length > 0) {
      chooseMovie(api, user, res, req);
    } else {
      console.log('NO RESULTS. fetch again');
      setTimeout(async () => {
        const api = await fetchMovies(req);
        console.log('number of results: ', api.data.results.length);
        chooseMovie(api, user, res, req);
      }, 500);
    }
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
