const { Worker } = require('worker_threads');

const worker_1 = new Worker('./worker_1');

worker_1.on('message', (msg) => {
  console.log('A message for Main process:', msg);
});
