const { parentPort, workerData } = require('worker_threads');

// listen to the main process
parentPort.on('message', (message) => {
  console.log('Worker_1 received from Main Process:', message);

  // send something to another thread
  workerData.port.postMessage('How are you!');
});

// listen for messages from the other thread
workerData.port.on('message', (message) => {
  console.log('Worker_1 received from Worker_2:', message);
});
