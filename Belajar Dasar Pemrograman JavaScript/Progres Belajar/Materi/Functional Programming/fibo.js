// This is Fibonnacci sequence with pure function
// Using memoized to store the cache so it can be used again
// If the same number given
function memoizedFibonacci() {
    let cache = {};
    
    function fibonacci(n) {
      if(n in cache) return cache[n];
      if(n <= 1) {
        cache[n] = n;
      } else {
        cache[n] = fibonacci(n - 2) + fibonacci(n - 1);
      }
      return cache[n];
    };
    return fibonacci;
  }
  
  const fibonacci = memoizedFibonacci();
  
  console.log(fibonacci(10)); // 55
  console.log(fibonacci(30)); // 832040
  console.log(fibonacci(100)); // 354224848179262000000
  console.log(fibonacci(1000)); // 4.346655768693743e+208