const { parentPort, workerData } = require('worker_threads');

// listen to the main process
parentPort.on('message', (message) => {
  console.log('Worker_1 received from Main P:', message);

  // send something to another thread
  workerData.port.postMessage('Hey bro!');
});

// listen for messages from the other thread
workerData.port.on('message', (message) => {
  console.log('Worker_1 received from Worker_2:', message);
});

// keeps thread alive
setInterval(() => {}, 1000);

