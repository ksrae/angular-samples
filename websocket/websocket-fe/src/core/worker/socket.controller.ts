import { Subject } from "rxjs";

export class SocketController {
  private readonly url!: string;
  private readonly protocol!: string[];
  private readonly wk!: Worker;
  message$ = new Subject();

  constructor(
    public webSocketUrl: string = '',
    public headers: string[] = []
  ) {
    this.url = webSocketUrl;
    this.protocol = headers;
    this.wk = new Worker(URL.createObjectURL(new Blob([`(${webWorker})()`], {type: 'text/javascript'})));

    this.wk.onmessage = (e: any) => {
      this.message$.next(e.data);
    }

    // try to connect if constructor get a socSocket url only.
    if(this.url?.length > 0) {
      this.connect(this.url);
    }
  }

  /**
   * connect to websocket
   * @param {string} websocketUrl
   */
  connect(websocketUrl: string, protocol: string[] = []): void {
    this.wk.postMessage({
      type: 'connect',
      data: {
        url: websocketUrl,
        protocol: protocol
      }
    })
  }

  /** get readyState from websocket */
  getState() {
    this.wk.postMessage({
      type: 'state',
      data: ''
    })
  }
  /**
   * send message to websocket
   * @param {unknown} data
   */
  send(data: unknown) {
    this.wk.postMessage(
      { type: 'send',
        data
      }
    );
  }
  /**
   * disconnect websocket.
   *
   * to reconnect, call connect function
   */
  close() {
    this.wk.terminate();
  }
}

// webworker
function webWorker() {
  let _url = '';
  let _protocol = [];
  let _ws: WebSocket;
  // for timeout
  let _performanceTime: number | undefined;

  onmessage = ({data}: MessageEvent) => {
    switch(data.type) {
      // connecting to WebSocket
      case 'connect':
        _url = data.data.url;
        _protocol = data.data.protocol;
        _ws = new WebSocket(_url, _protocol);

        if(_ws.readyState === WebSocket.CONNECTING) {
          returnMessage('success', 'connected');
        } else {
          returnMessage('error', 'no connection', 1);
        }
        break;

      // return websocket readyState
      case 'state':
        returnMessage('success', _ws.readyState);
        break;

      // send message to server by websocket
      // if not ready, return error
      case 'send':
        if(!_url || _ws.readyState !== WebSocket.OPEN) {
          returnMessage('error', 'no connection', 1);
        }

        _performanceTime = performance.now();
        _ws.send(
          JSON.stringify({
            data: data.data
          }
        ));
        break;
    }

    // response from server
    _ws.onmessage = (e: MessageEvent) => {
      // timeout test
      // if(_performanceTime != undefined && _performanceTime > 0) {
      //   let responseTime = performance.now() - _performanceTime;
      //   console.log({responseTime});

      //   if(responseTime < 2) {
      //     const response = JSON.parse(e.data);
      //     returnMessage('success', response);
      //   } else {
      //     returnMessage('timeout', 'error', -1);
      //   }
      //   _performanceTime = undefined;
      // } else {
      //   const response = JSON.parse(e.data);
      //   returnMessage('success', response);
      // }

      const response = JSON.parse(e.data);
      returnMessage('success', response);
    }

    // websocket close
    _ws.onclose = (e: CloseEvent) => {
      returnMessage('close', 'close', 999);
    }

    // console.log('Worker: Message received from main script', {e});
  }

  function returnMessage(type: string, data: unknown, code = 0) {
    postMessage(
      {
        type,
        code,
        data
      });
  }
}
