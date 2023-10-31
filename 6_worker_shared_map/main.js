const { Worker } = require('worker_threads');
const { WorkerMap } = require('worker_map');

const map = new WorkerMap();
map.set('balance', { usd: 100 });

new Worker('./worker', {
  workerData: { mapBuffer: map.toSharedBuffer() },
});

setTimeout(() => {
  console.log(map.get('balance')); // { usd: ? }
}, 50);
