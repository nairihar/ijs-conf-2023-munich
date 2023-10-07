const { Worker } = require('node:worker_threads');

console.log('PID:', process.pid);

const worker = new Worker('./worker');

worker.on('message', (msg) => {
  console.log('Message from thread:', msg);
});

