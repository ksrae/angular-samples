/// <reference lib="webworker" />

addEventListener('message', ({data}) => {
  console.log('getmessage', data);

  // data를 받아 decode 하고 처리한 뒤 다시 encode
  // buffer -> string -> json으로 변환 후 postMessage

  if(data.type === 'connect') {
    postMessage(data);
  } else {
    const dataObj = decodeBuffer(data);
    const {type, ...obj} = dataObj;

    let sum = 0;
    for(let i=obj.message.min; i<=obj.message.max;i++) {
      sum+=(Math.pow(i, 2));
    }

    postMessage(encodeString(sum));

  }

  //   if (dataObj.type === 'chart') {
  //     const {type, ...obj} = dataObj;
  //     const result = chartWorker(obj);
  //     postMessage(
  //       encodeString(result)
  //     );
  //   }
  // }

});


function decodeBuffer(data: any) {
  const jsonBuffer = new Uint8Array(data);
  const jsonString = new TextDecoder().decode(jsonBuffer);
  return JSON.parse(jsonString);
}

function encodeString(data: any) {
  const resultString = JSON.stringify(data);
  return new TextEncoder().encode(resultString);
}
