# `iJS Conference 2023 | Munich`
Topic: **Multithreading w/ Node.JS**
Date: Tuesday, October 24 2023 | 16:45 - 17:45

[The link to my talk is on javascript-conference.com.](https://javascript-conference.com/node-js/multithreading-node-js/)

![](https://topentol.sirv.com/ijs-2023-munich/wallpaper.jpg)

---

## Slide
*Soon*

## Examples
[**1) Basic**](https://github.com/nairihar/ijs-conf-2023-munich/tree/main/1_basic)

```bash
cd 1_basic && node main.js
```

[**2) Communication**](https://github.com/nairihar/ijs-conf-2023-munich/tree/main/2_communication)

```bash
cd 2_communication && node main.js
```

[**3) Workers communication**](https://github.com/nairihar/ijs-conf-2023-munich/tree/main/3_workers_communication)

```bash
cd 3_workers_communication && node main.js
```

[**4) Shared state**](https://github.com/nairihar/ijs-conf-2023-munich/tree/main/4_shared_state)

```bash
cd 4_shared_state && node main.js
```

## Special examples
I've built two open-source libraries that provide abstraction for `worker_threads`.

## [funthreads](https://github.com/nairihar/funthreads/)
[*Example 5*](https://github.com/nairihar/ijs-conf-2023-munich/tree/main/5_callback_thread)

A simple library that provides an abstraction for the Node.js worker_threads module. You can run your function in a dedicated thread by working with Promises.

```bash
npm i funthreads
cd 5_callback_thread && node main.js
```

*JavaScript code*
```js
const { executeInThread } = require('funthreads');

async function calculate() {
    const values = await Promise.all([
        executeInThread(() => 2 ** 10), // this doesn't block the main thread
        executeInThread(() => 3 ** 10)
    ]);
    
    console.log(values); // 1024, 59049
}

calculate();
```

## [worker_map](https://github.com/nairihar/worker_map/)
[*Example 6*](https://github.com/nairihar/ijs-conf-2023-munich/tree/main/6_worker_shared_map)

![](https://topentol.sirv.com/github/worker_map.jpg)

A simple abstraction for Node.js worker_threads, allowing you to create and share a Map (hash table) between worker threads and the main process. This simplifies the process of managing shared data and communication between worker threads.

```bash
npm i worker_map
cd 6_worker_shared_map && node main.js
```

*JavaScript code*

First, let's create a simple hash map structure in main process, then create a worker thread and share the hash.

```js
// main.js
const { Worker } = require("worker_threads");
const { WorkerMap } = require("worker_map");

const map = new WorkerMap();
map.set("balance", 100); // sync operation

new Worker("./worker.js", {
  workerData: {
    mapBuffer: map.toSharedBuffer(),
  },
});

setTimeout(() => {
  console.log(map.get("balance")); // 200
}, 50);
```

Now, let's access the shared hash map structure in the worker thread.

```js
// worker.js
const { WorkerMap } = require("worker_map");
const { workerData } = require("worker_threads");

const map = new WorkerMap(workerData.mapBuffer);
console.log(map.get("balance")); // 100

// The change will be reflected in the main process as well
map.set("balance", 200);
```

---

Sincerely,
Nairi Harutyunyan

[**Medium**](https://nairihar.medium.com/) | [**Linkedin**](https://linkedin.com/in/nairihar) | [**@javascript newsletter in Telegram**](https://t.me/javascript)
