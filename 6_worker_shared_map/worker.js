// worker thread
const { WorkerMap } = require('worker_map');
const { workerData } = require('worker_threads');

const map = new WorkerMap(workerData.mapBuffer);
console.log(map.get('balance')); // { usd: 100 }

map.set('balance', { usd: 400 });
