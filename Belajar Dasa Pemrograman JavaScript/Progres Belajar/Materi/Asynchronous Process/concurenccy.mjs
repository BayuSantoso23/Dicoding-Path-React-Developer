// Concurrency is when many asynchronous process done together

// Promise.all, if 1 process is failed all process will be counted as fail
console.log("Promise.all : ")

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ups!')), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log('Success');
    console.log(values);
  })
  .catch((error) => {
    console.log('Failed');
    console.log(error.message);
  });

/* Output:
Failed
Ups!
*/

// Promise.allSettled, if 1 process fail , other process will be counted as success


const test1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const test2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ups!')), 2000));
const test3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([test1, test2, test3])
  .then((values) => {
    console.log("Promise.allSettled : ");
    console.log('Success');
    console.log(values);
  })
  .catch((error) => {
    console.log('Failed');
    console.log(error.message);
  });

/* Output:
Success
[
  { status: 'fulfilled', value: 1 },
  {
    status: 'rejected',
    reason: Error: Ups!
        at Timeout._onTimeout (file:///home/nurrizkiadip/static-method.mjs:2:75)
        at listOnTimeout (node:internal/timers:573:17)
        at process.processTimers (node:internal/timers:514:7)
  },
  { status: 'fulfilled', value: 3 }
]
*/