const { workerData, parentPort } = require('worker_threads');

// parentPort refers to Worker 1

const { port } = workerData;

port.postMessage('Hello from Worker_2!');
