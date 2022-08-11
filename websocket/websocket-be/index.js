const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8001 });

let timer2 = 0;
wss.on('connection', ws => {
  let timer = 0;
  // console.log('connection:', {ws});
  console.log('total Connection:', wss.clients.size);
  
  // get message from client
  ws.on('message', message => {
    console.log(`server receive a message => ${message}`);
    const data = JSON.parse(message);
    
    console.log(data, data.data.id);
    // immediate response to client for each client message 
    ws.send(
      JSON.stringify({
        result: 'success',
        code: 0,
        data: {
          userId: data.data.id,
          text: `8001 server get ${timer++} message from ${data.data.id}`
        }
      })
    );

    // setInterval(() => {
    //   timer += 1;
    //   ws.send(
    //     JSON.stringify({
    //       result: 'success',
    //       code: 0,
    //       data: {
    //         userId: data.data.id,
    //         text: `tick ${timer.toString()}`
    //       }
    //     })
    //   )
    // }, 1000);
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
  }, 1000);

  // setInterval(() => {
  //   timer2+=1;
  //   wss.clients.forEach((client) => {
  //     client.send(
  //       JSON.stringify({
  //         result: 'success',
  //         code: 1,
  //         data: `this is broadcast message ${timer.toString()} times`
  //       })
  //     );
  //   })
  // }, 1)

  // handshake response to client
  ws.send(
    JSON.stringify({
      data: 'server websocket is connected'
    })
  );
});