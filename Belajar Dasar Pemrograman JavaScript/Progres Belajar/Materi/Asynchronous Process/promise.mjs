// Promise effectifely handle many async process
// 3 Steps :
// 1. Pending : Process started, no result yet
// 2. Fulfilled : Process complete, result available
// 3. Rejected : Process failed, error available
function promiseExecutor(resolve, reject) {
    setTimeout(() => {
      console.log('Melakukan sesuatu sebelum Promise diselesaikan.');
  
      // Penentuan hasil dari proses asinkron
      const number = Math.random();
  
      // Nilai fulfillment dari Promise
      if (number > 0.5) {
        resolve('You did it!');
      }
      // Nilai rejection dari Promise
      else {
        reject('Sorry, something went wrong!');
      }
    }, 2000);
}
  
function doSomething() {
    return new Promise(promiseExecutor);
}


function onFulfilled(doSomethingData) {
    // Do your jobs when "fulfilled" happens…
    console.log(doSomethingData);
}

function onRejected(doSomethingError) {
    // Do your jobs when "rejected" happens…
    console.log(doSomethingError);
}
  
doSomething().then(onFulfilled, onRejected);