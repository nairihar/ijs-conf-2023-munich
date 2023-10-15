const { executeInThread, ThreadModules } = require('funthreads');

const threadModules = new ThreadModules('fs');

function task(m, a, b) {
    console.log(a, b)
    return b;
}

executeInThread(task, threadModules, 1, 2)
    .then((result) => {
        console.log('result', result);
    });


