const express = require('express');
const axios = require('axios');
const auth = require('../../middlewares/auth');
const { User } = require('../../models');
const moment = require('moment');

const router = express.Router();

// function randomDate() {
//   return moment(new Date(+new Date() - Math.floor(Math.random() * 1.5 * 10 ** 12))).format('YYYY-MM-DD');
// }

// function chooseOneMovieFromMany(movies) {
//   return movies[Math.floor(movies.length * Math.random())];
// }

// function movieNotRatedYet(chosenMovie, user) {
//   if (
//     user.likes.some((movie) => movie.id === chosenMovie.id) ||
//     user.dislikes.some((movie) => movie.id === chosenMovie.id) ||
//     user.favourites.some((movie) => movie.id === chosenMovie.id) ||
//     user.seen.some((movie) => movie.id === chosenMovie.id)
//   ) {
//     return false;
//   }
//   return true;
// }

// async function fetchMovies() {
//   const dateMax = randomDate();
//   const dateMin = moment(dateMax).subtract(1, 'years').format('YYYY-MM-DD');
//   console.log(`Looking for a movie with release date between ${dateMin} and ${dateMax}`);
//   try {
//     return await axios({
//       method: 'get',
//       url: `https://api.themoviedb.org/3/discover/movie?vote_average.gte=6&vote_count.gte=1000&primary_release_date.gte=${dateMin}&primary_release_date.lte=${dateMax}`,
//       headers: {
//         Authorization: 'Bearer ' + process.env.VUE_APP_TMDB_API_KEY,
//       },
//     });
//   } catch (error) {
//     return error;
//   }
// }

// function chooseMovie(api, user, res, req, round) {
//   let chosenMovie;
//   let success = false;
//   for (let i = 1; i <= api.data.results.length * 10; i += 1) {

//     chosenMovie = chooseOneMovieFromMany(api.data.results);
//     if (movieNotRatedYet(chosenMovie, user)) {
//       console.log(`Taking result with index ${api.data.results.indexOf(chosenMovie)}`);
//       console.log(`Movie: ${chosenMovie.title} / id: ${chosenMovie.id}`);
//       res.json({ chosenMovie });
//       success = true;
//       break;
//     }

//   }
//   if (!success) {
//     console.log('fetching new data array...');
//     round += 1;
//     setTimeout(async () => {
//       try {
//         const api = await fetchMovies(req);
//         console.log('number of results: ', api.data.results.length);
//         if (api.data.results.length > 0) {
//           chooseMovie(api, user, res, req);
//         } else if (round > 3) {
//           res.send
//             .status(404)
//             .json({ message: "Could not find a movie, try adjusting your search filter under 'settings'" });
//         } else {
//           console.log('NO RESULTS. fetch again');
//           setTimeout(async () => {
//             const api = await fetchMovies(req);
//             console.log('number of results: ', api.data.results.length);
//             chooseMovie(api, user, res, req);
//           }, 500);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }, 500);
//   }
// }

// router.post('/random', auth(), async (req, res) => {
//   try {
//     let round = 1;
//     const user = await User.findById(req.user.id, 'likes dislikes favourites seen');
//     let api = await fetchMovies();
//     console.log('number of results: ', api.data.results.length);
//     if (api.data.results.length > 0) {
//       chooseMovie(api, user, res, req);
//     } else if (round > 3) {
//       res.send.status(404).json({ message: "Could not find a movie, try adjusting your search filter under 'settings'" });
//     } else {
//       round += 1;
//       console.log('NO RESULTS. fetch again, round ' + round);
//       setTimeout(async () => {
//         const api = await fetchMovies(req);
//         console.log('number of results: ', api.data.results.length);
//         chooseMovie(api, user, res, req, round);
//       }, 1000);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// ---------------------------------------------------------------------

function randomDate(start, end) {
  return moment(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))).format('YYYY-MM-DD');
}

function toDate(string) {
  return moment(string, 'YYYY-MM-DD').toDate();
}

function findMovieThatWasNotRated(movies, user) {
  let i = 0;
  while (i < movies.length) {
    const chosenMovie = movies[i];
    console.log(`taking index ${i} of array with length of ${movies.length}`);
    if (
      user.likes.some((movie) => movie.id === chosenMovie.id) ||
      user.dislikes.some((movie) => movie.id === chosenMovie.id) ||
      user.favourites.some((movie) => movie.id === chosenMovie.id) ||
      user.seen.some((movie) => movie.id === chosenMovie.id)
    ) {
      i += 1;
    } else if (i === movies.length) {
      return false;
    } else return chosenMovie;
  }
  // return movies[Math.floor(movies.length * Math.random())];
}

router.get('/random', auth(), async (req, res) => {
  try {
    const user = await User.findById(req.user.id, 'likes dislikes favourites seen');
    // destructure vars from query string in url
    const { dateMin, dateMax, genres, rating, voteCount } = req.query;

    const getMovies = async () => {
      // generate a random time range bases on the user settings
      const randomDateMin = randomDate(toDate(dateMin), toDate(dateMax));
      const randomDateMax = moment(randomDateMin, 'YYYY-MM-DD').add(1, 'years').format('YYYY-MM-DD');
      // create url
      const url = `https://api.themoviedb.org/3/discover/movie?vote_average.gte=${rating}&vote_count.gte=${voteCount}&primary_release_date.gte=${randomDateMin}&primary_release_date.lte=${randomDateMax}&without_genres=${genres}`;
      console.log(url);

      const { data } = await axios({
        method: 'get',
        url,
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_TMDB_API_KEY}`,
        },
      });

      return data.results;
    };

    let movies = await getMovies();
    if (movies.length === 0) {
      let round = 0;
      const timer = setInterval(async () => {
        console.log(`Got no movies back. Going for round: ${round}`);
        movies = await getMovies();
        if (movies.length > 0) {
          const chosenMovie = findMovieThatWasNotRated(movies, user);
          if (chosenMovie) {
            res.status(200).json({ chosenMovie });
            clearInterval(timer);
          }
        } else if (round >= 2) {
          res.status(400).json({ message: 'No movies found, try changing your search filter.' });
          clearInterval(timer);
        } else round += 1;
      }, 1000);
    } else {
      const chosenMovie = findMovieThatWasNotRated(movies, user);
      if (!chosenMovie) {
        res.status(400).json({ message: 'No movies found, try changing your search filter.' });
      } else {
        res.status(200).json({ chosenMovie });
      }
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

router.get('/genres', auth(), async (req, res) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/genre/movie/list',
      headers: {
        Authorization: 'Bearer ' + process.env.VUE_APP_TMDB_API_KEY,
      },
    });
    res.json({ genres: data.genres });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
