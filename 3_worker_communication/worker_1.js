// worker thread #1
const {
  parentPort, workerData
} = require('worker_threads');

const { port1 } = workerData;

parentPort.on('message', (msg) => {
  console.log('W1 received from M:', msg);
  port1.postMessage('You done w/ the laundry?');
});

port1.on('message', (msg) => {
  console.log('W1 received from W2:', msg);
});
