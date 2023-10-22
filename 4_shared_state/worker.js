// worker thread
const { workerData } = require('worker_threads');

workerData.sharedArray[0] = 11;

console.log('W1 :', workerData.sharedArray);
