// main thread
const { Worker } = require('worker_threads');

const buffer = new SharedArrayBuffer(4);
const i16 = new Int16Array(buffer);

console.log('M [SA]:', i16);

new Worker('./worker', {
  workerData: { sharedArray: i16 }
});

setTimeout(() => {
  console.log('M [SA]:', i16);
}, 300);
