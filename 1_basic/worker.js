// worker thread
const { parentPort } = require('worker_threads');

parentPort.postMessage('Hello!');

console.log('PID', process.pid);

