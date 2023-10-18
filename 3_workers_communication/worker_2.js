// worker thread #2
const { workerData } = require('worker_threads');

workerData.port.on('message', (msg) => {
  console.log('W2 received from W1:', msg);
  workerData.port.postMessage('I am great!');
});
