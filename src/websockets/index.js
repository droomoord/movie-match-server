// const User = require('../models/user.model');

const connectWebSocket = (webSocketClient) => {
  const sockets = [];
  webSocketClient.send('connection ok!');
  webSocketClient.on('message', (message) => {
    const msg = JSON.parse(message);
    switch (msg.type) {
      case 'login':
        webSocketClient.send(`there was a login by ${msg.data.user.name}`);
        sockets.push(webSocketClient);
        break;

      case 'request':
        webSocketClient.send(`there was a request by ${msg.data.sender} to ${msg.data.receiver}`);
        // if (user === msg.data.sender) webSocketClient.send('You are the sender!');
        // if (user === msg.data.receiver) webSocketClient.send('You are the reveiver!');
        break;
      default:
        webSocketClient.send('bad request');
    }
    // webSocketClient.send(JSON.stringify(data));
  });
};

module.exports = connectWebSocket;
