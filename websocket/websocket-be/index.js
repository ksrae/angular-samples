const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8001 });
let timer = 0;
let timer2 = 0;
wss.on('connection', ws => {

  // get message from client
  ws.on('message', message => {
    console.log(`server receive a message => ${message}`);
    const data = JSON.parse(message);
    
    // immediate response to client for each client message 
    ws.send(
      JSON.stringify({
        result: 'success',
        code: 0,
        data: `response message => ${data.data}`
      })
    );
  });

  // websocket close
  ws.on("close", (code, reason) => {
    console.log('closed');

    // response to client
    ws.send(
      JSON.stringify({
        result: 'close',
        code: 999,
        data: ''
      })
    )
  });

  // response to client each millisecond test
  setInterval(() => {
    timer += 1;
    ws.send(
      JSON.stringify({
        result: 'success',
        code: 0,
        data: `tick ${timer.toString()}`
      })
    )
  }, 1);

  setInterval(() => {
    timer2+=1;
    wss.clients.forEach((client) => {
      client.send(
        JSON.stringify({
          result: 'success',
          code: 1,
          data: `this is broadcast message ${timer.toString()} times`
        })
      );
    })
  }, 1)

  // handshake response to client
  ws.send('server websocket is connected');
});