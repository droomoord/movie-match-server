const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const path = require('path');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const httpStatus = require('http-status');
const config = require('./config/config');
const morgan = require('./config/morgan');
const { jwtStrategy } = require('./config/passport');
const { authLimiter } = require('./middlewares/rateLimiter');
const routes = require('./routes/v1');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');

const app = express();
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

const Server = http.createServer(app);
const ws = new WebSocket.Server({ server: Server, port: 8081 });

const sockets = [];

ws.on('connection', function (webSocketClient) {
  webSocketClient.send(
    JSON.stringify({
      type: 'message',
      data: 'socket connected',
    })
  );
  webSocketClient.on('message', (message) => {
    const msg = JSON.parse(message);
    switch (msg.type) {
      case 'login':
        webSocketClient.user = msg.data.user;
        console.log('Socket connection was made by', webSocketClient.user.email);
        sockets.push(webSocketClient);
        sockets.forEach((socket) => {
          socket.send(
            JSON.stringify({
              type: 'message',
              data: `there was a login by ${msg.data.user.name}`,
            })
          );
        });

        break;

      case 'request':
        webSocketClient.send(`there was a request by ${msg.data.sender.name} to ${msg.data.receiver.name}`);
        sockets.forEach((socket) => {
          if (socket.user.id === msg.data.receiver.id)
            socket.send(
              JSON.stringify({
                type: 'newRequest',
                sender: msg.data.sender,
              })
            );
        });
        break;
      case 'accept':
        console.log('Server says: there was an accept!');

        webSocketClient.send(`there was an accept by ${msg.data.receiver.name} to ${msg.data.sender.name}`);
        sockets.forEach((socket) => {
          console.log(message);

          if (socket.user.id === msg.data.receiver.id)
            socket.send(
              JSON.stringify({
                type: 'accept',
                sender: msg.data.sender,
              })
            );
        });
        break;
      default:
        webSocketClient.send('bad request');
    }
  });
  webSocketClient.on('close', () => {
    console.log('a socket was closed');
  });
});

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// limit repeated failed requests to auth endpoints
if (config.env === 'production') {
  app.use('/v1/auth', authLimiter);
}

// v1 api routes
app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = { ws, Server };
