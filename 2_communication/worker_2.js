// worker thread #2
const {
  workerData, parentPort
} = require('worker_threads');

// parentPort refers to "Worker 1"
// port refers to "Main thread"
const { port } = workerData;

port.postMessage('Hello from Worker_2!');
