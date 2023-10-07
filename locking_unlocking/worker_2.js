const { parentPort } = require('worker_threads');

parentPort.on('message', (sharedArray) => {
  console.log('Message for Worker_2 from Parent:', sharedArray);

  setTimeout(() => {
    console.log('Worker_2, waiting to edit!');
    Atomics.wait(sharedArray, 0, 1);
    Atomics.store(sharedArray, 2, 2);
    console.log('Worker_2 finished editing!', sharedArray);
  }, 1000);
});

