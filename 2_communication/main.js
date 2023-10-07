const { Worker } = require('worker_threads');

const worker_1 = new Worker('./worker_1');

console.log('PID:', process.pid);

worker_1.on('message', (msg) => {
  console.log('A message for Main process:', msg);
});