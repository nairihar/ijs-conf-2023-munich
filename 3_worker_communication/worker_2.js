// worker thread #2
const { workerData } = require('worker_threads');

const { port2 } = workerData;

port2.on('message', (msg) => {
  console.log('W2 received from W1:', msg);
  port2.postMessage('No, not yet!');
});
