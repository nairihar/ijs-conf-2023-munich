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

```js
cd 1_basic && node main.js
```

[**2) Communication**](https://github.com/nairihar/ijs-conf-2023-munich/tree/main/2_communication)

```js
cd 2_communication && node main.js
```

[**3) Workers communication**](https://github.com/nairihar/ijs-conf-2023-munich/tree/main/3_workers_communication)

```js
cd 3_workers_communication && node main.js
```

[**4) Shared state**](https://github.com/nairihar/ijs-conf-2023-munich/tree/main/4_shared_state)

```js
cd 4_shared_state && node main.js
```

## Special examples
I've built two open-source libraries that provide abstraction for worker threads.

## [funthreads](https://github.com/nairihar/funthreads/)
[*Example 5*](https://github.com/nairihar/ijs-conf-2023-munich/tree/main/5_callback_thread)

A simple library that provides an abstraction for the Node.js worker_threads module. You can run your function in a dedicated thread by working with Promises.

```js
npm i funthreads
cd 5_callback_thread && node main.js
```

## [worker_map](https://github.com/nairihar/worker_map/)
[*Example 6*](https://github.com/nairihar/ijs-conf-2023-munich/tree/main/6_worker_shared_map)

A simple abstraction for Node.js worker_threads, allowing you to create and share a Map (hash table) between worker threads and the main process. This simplifies the process of managing shared data and communication between worker threads.

```js
npm i worker_map
cd 6_worker_shared_map && node main.js
```

---

Sincerely,
Nairi Harutyunyan

[**Medium**](https://nairihar.medium.com/) | [**Linkedin**](https://linkedin.com/in/nairihar) | [**@javascript newsletter in Telegram**](https://t.me/javascript)
