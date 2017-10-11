const https = require('https');
const http = require('http');
const fs = require('fs');
const { initConfig } = require('./server/config');
const { getUsers } = require('./server/database');


initConfig();
const isDev = process.env.NODE_ENV === 'development';
const seconds = 5;
const interval = seconds * 1000;

const cert = fs.readFileSync(process.env.CERT || `${__dirname}/fixtures/cert.pem`, 'utf-8');
const key = fs.readFileSync(process.env.KEY || `${__dirname}/fixtures/key.pem`, 'utf-8');

const server = isDev
  ? http.createServer()
  : https.createServer({ key, cert, rejectUnauthorized: false });

const io = require('socket.io').listen(server);

/**
 * On connection by client
 */
io.on('connection', async (socket) => {
  const data = await getUsers();

  socket.emit('leaderboard', data);
});

/**
 * Every `ìnterval`, we send stringified data to all clients
 */
setInterval(() => {
  // If no clients connected, we skip db call
  if (io.eio.clientsCount === 0) {
    return;
  }

  getUsers()
    .then((data) => {
      /**
       * Instantly broadcast it to all users
       */
      io.sockets.emit('leaderboard', data);
    })
    .catch((err) => {
      console.error('Error at polling', err);
    });
}, interval);

server.listen(8080);
console.log('Websocket server is alive');
