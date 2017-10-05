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

// Broadcast
wss.broadcast = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

initConfig();

wss.on('connection', async (ws) => {
  const data = await getUsers();

  ws.send(wssData(data));
});

(async () => {
  const data = await getUsers();

  wss.broadcast(wssData(data));
  setInterval(() => {
    wss.broadcast(wssData(data));
  }, 30 * 1000);
})();

server.listen(port, () => console.log(`Server start at port ${port}`));
