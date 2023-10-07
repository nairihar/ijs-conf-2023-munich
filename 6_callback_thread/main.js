const { executeInThread } = require('funthreads');

async function calculate() {
    const values = await Promise.all([
        executeInThread(() => 2 ** 10), // this doesn't block the main thread
        executeInThread(() => 3 ** 10)
    ]);
    
    console.log(values); // 1024, 59049
}

calculate();
