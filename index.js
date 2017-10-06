const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { initConfig } = require('./server/config');
const { getUsers } = require('./server/database');

const port = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const wssData = data => JSON.stringify(data);

const seconds = 10;
const interval = seconds * 1000;

/**
 * Broadcast helper to send data to all connected clients
 */
wss.broadcast = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

initConfig();

/**
 * On connection by client
 */
wss.on('connection', async (ws) => {
  const data = await getUsers();

  /**
   * Send data to this client to init front UI
   */
  ws.send(wssData(data));
});

/**
 * Fetch all users at start of app
 */
getUsers()
  .then((data) => {
    /**
     * Instantly broadcast it to all users
     */
    wss.broadcast(wssData(data));

    /**
     * Every `ìnterval`, we send stringified data to all clients
     */
    setInterval(() => {
      wss.broadcast(wssData(data));
    }, interval);
  })
  .catch((err) => {
    console.error('Error at polling', err);
  });

server.listen(port, () => console.log(`Server start at port ${port}`));
