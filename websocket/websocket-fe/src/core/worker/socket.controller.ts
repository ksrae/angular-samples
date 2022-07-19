import { Subject } from "rxjs";

/**
 * 웹소켓을 지원하는 worker를 쉽게 사용하도록 돕는 클래스 입니다.
 *
 * injectable하지 않으므로 여러 소켓을 사용해야 하는 경우 각각의 서비스를 만들어 이 workerController를 인스턴스화해서 사용하면 됩니다.
 *
 * @export
 * @class SocketController
 */
export class SocketController {
  #url!: string;
  #wk = new Worker('./network-worker.js');
  message$ = new Subject();

  constructor(
    public webSocketUrl: string = ''
  ) {
    this.#url = webSocketUrl;

    this.#wk.onmessage = (e: any) => {
      // console.log('received from worker', {e});
      this.message$.next(e.data);
    }

    // try to connect if constructor get a socSocket url only.
    if(this.#url?.length > 0) {
      this.connect(this.#url);
    }
  }

  /**
   * connect to websocket
   *
   * @param {string} url
   * @memberof WorkerController
   */
  connect(url: string): void {
    this.#wk.postMessage({
      type: 'connect',
      data: url
    })
  }
  /**
   * get readyState from websocket
   *
   * @memberof WorkerController
   */
  getState() {
    this.#wk.postMessage({
      type: 'state',
      data: ''
    })
  }
  /**
   * send message to websocket
   *
   * @param {unknown} data
   * @memberof WorkerController
   */
  send(data: unknown) {
    this.#wk.postMessage(
      { type: 'send',
        data
      }
    );
  }
  /**
   * disconnect websocket
   * to reconnect, just call connect function
   *
   * @memberof WorkerController
   */
  close() {
    this.#wk.terminate();
  }
}
