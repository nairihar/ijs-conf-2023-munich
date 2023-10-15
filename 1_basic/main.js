const { Worker } = require('worker_threads');

const worker = new Worker('./worker');

worker.on('message', (msg) => {
  console.log('Message from thread:', msg);
});
