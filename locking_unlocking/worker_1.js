const { parentPort } = require('worker_threads');

parentPort.on('message', (sharedArray) => {
  console.log('Message for Worker_1 from Parent:', sharedArray);

  setTimeout(() => {
    console.log('Worker_1, waiting to edit!');
    Atomics.wait(sharedArray, 0, 1);
    Atomics.store(sharedArray, 3, 9);
    console.log('Worker_1 finished editing!', sharedArray);
    // Atomics.notify(sharedArray, 0, 1);
  }, 1000);
});
