// main thread
const { Worker } = require('worker_threads');

const buffer = new SharedArrayBuffer(4);
const sharedArray = new Int32Array(buffer);

console.log('M [SA]:', sharedArray);

new Worker('./worker', {
  workerData: { sharedArray }
});

setTimeout(() => {
  console.log('M [SA]:', sharedArray);
}, 300);
