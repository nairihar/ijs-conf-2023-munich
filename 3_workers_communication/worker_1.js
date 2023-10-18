// worker thread #1
const {
  parentPort, workerData
} = require('worker_threads');

parentPort.on('message', (msg) => {
  console.log('W1 received from M:', msg);
  workerData.port.postMessage('How are you!');
});

workerData.port.on('message', (msg) => {
  console.log('W1 received from W2:', msg);
});
