const { Server } = require('ws');
const { createServer } = require('http');

const app = require('express')();

const server = createServer(app);
const ws = new Server({ server });

server.listen(8000);
var index = 0;

ws.on('connection', socket => {
  socket.on('message', data => {
    // That's the object that we passed into `SendWebSocketMessage` constructor
    const { type, from, message } = JSON.parse(data);
    index += 1;

    if (type === 'message') {
      const event = JSON.stringify({
        type: '[Chat] Add message',
        from: `return from: ${from} : count: ${index}`,
        message: `return message: ${message} : count: ${index}`
      });

      // That's the same as `broadcast`
      // we want to send message to all connected
      // to the chat clients
      console.log({event});
      ws.clients.forEach(client => {
        client.send(event);
      });
    }
  });
});
