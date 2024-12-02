function promiseExecutor(resolve, reject) {
    setTimeout(() => {
      resolve('You did it!');
    }, 2000);
}

function doSomething() {
    return new Promise(promiseExecutor);
}


async function promiseWithAsyncAwait() {
try {
    console.log('Start.');

    const result = await doSomething();
    console.log(result);

    console.log('End.');
} catch (error) {
    console.log(error.message);
}
}
  
promiseWithAsyncAwait();
  