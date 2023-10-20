// main thread
const {
  Worker, MessageChannel
} = require('worker_threads');

const { port1, port2 } = new MessageChannel();

const worker1 = new Worker('./worker_1', {
  workerData: { port1 },
  transferList: [ port1 ],
});
const worker2 = new Worker('./worker_2', {
  workerData: { port2 },
  transferList: [ port2 ],
});

worker1.postMessage('Hello from Main thread!');
