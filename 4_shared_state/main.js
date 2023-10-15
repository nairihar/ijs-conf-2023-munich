const { Worker } = require('worker_threads');

const buffer = new SharedArrayBuffer(4);
const sharedArray = new Int32Array(buffer);

console.log('Main thread:', sharedArray);

new Worker('./worker', {
  workerData: {
    sharedArray,
  }
});

setTimeout(() => {
  console.log('Main thread:', sharedArray);
}, 300);
