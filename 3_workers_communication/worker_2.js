const { workerData } = require('worker_threads');

// listen for messages from the other thread
workerData.port.on('message', (message) => {
  console.log('Worker_2 received from Worker_1:', message);

  workerData.port.postMessage('Love you bro!');
});

setInterval(() => {}, 1000);

