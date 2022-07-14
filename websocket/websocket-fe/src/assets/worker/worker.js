let url = 'ws://localhost:8001';
let ws = new WebSocket(url);

onmessage = function(e) {
  console.log('Worker: Message received from main script', {e});

  if(ws.readyState === WebSocket.CONNECTING) {
    console.log('handshake complete');
  }
  else if (ws.readyState === WebSocket.OPEN) {

    // request to server
    // this.ws.send(
    //   JSON.stringify({
    //     data: data
    //   }
    // ));

    // response from server
    ws.onmessage = (e) => {
      const response = JSON.parse(e.data);
      if(response.result === 'success') {
        postMessage(response);
      }

    }

    // websocket close
    ws.onclose = (e) => {
      this.postMessage(
        {
          result: 'close',
          code: 999,
          data: 'close'
        });

    }
  }
}

