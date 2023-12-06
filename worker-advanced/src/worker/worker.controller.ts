import { Subject } from 'rxjs';

export class WorkerController {
  worker: any;
  worker$ = new Subject();

  constructor() {
    if (typeof Worker !== 'undefined') {
      // creating web worker
      this.worker = new Worker(new URL('./app.worker', import.meta.url));

      // receive
      this.worker.onmessage = ({ data }: any) => {
        // transferable object 형태
        const resultBuffer = new Uint8Array(data);
        const resultString = new TextDecoder().decode(resultBuffer);
        this.worker$.next(resultString ? JSON.parse(resultString) : '');
      };


      // send
      this.worker.postMessage({
        type: 'connect',
        message: ''
      });

    } else {
      console.error('this environment does not support web worker');
    }
  }
  calculate(min: number = 1, max: number = 100) {
    this.postMessage({
      type: 'calculate',
      message: {
        min,
        max,
      }
    });
  }
  // setNewSeries(chartOptionsSeries: any[], seriesList: any[], zIndex: number, defaultZIndex: number) {
  //   this.postMessage({
  //     type: 'chart',
  //     name: 'setNewSeries',
  //     message: {
  //       optionSeries: chartOptionsSeries,
  //       newSeries: seriesList,
  //       zIndex,
  //       defaultZIndex
  //     }
  //   });
  // }


  private postMessage(data: any) {
    // json -> string -> buffer 형태로 변환
    const jsonBuffer = this.convertToBuffer(data);
    this.worker.postMessage(jsonBuffer, [jsonBuffer]);
  }
  private convertToBuffer(jsonData: any) {
    return new TextEncoder().encode(JSON.stringify(jsonData)).buffer;
  }
  destroy() {
    this.worker.terminate();
  }
}
