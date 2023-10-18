// worker thread #2

const {
  Worker, parentPort
} = require('worker_threads');

parentPort.postMessage('Hello form Worker_1!');

new Worker('./worker_2', {
    workerData: { port: parentPort },
    transferList: [ parentPort ],
});
