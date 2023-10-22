// main thread
const { Worker } = require('worker_threads');

const sb = new SharedArrayBuffer(4);
const i16 = new Int16Array(sb);

console.log('M  :', i16);

new Worker('./worker', {
  workerData: { sharedArray: i16 }
});

setTimeout(() => {
  console.log('M  :', i16);
}, 300);
