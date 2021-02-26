const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const rateRoute = require('./rate.route');
const connectRoute = require('./connect.route');
const movieRoute = require('./movie.route');

const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/rate',
    route: rateRoute,
  },
  {
    path: '/connect',
    route: connectRoute,
  },
  { path: '/movie', route: movieRoute },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
