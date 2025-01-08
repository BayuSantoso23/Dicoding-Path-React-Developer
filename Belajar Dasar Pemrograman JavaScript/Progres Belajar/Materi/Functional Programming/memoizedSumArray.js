// menerima argumen sebuah fungsi

// This function implement currying 
// In this technique it takes one argument at a time and 
// returns a function that takes the next argument.
function memoize(fn) {
    const cache = new Map(); // A Map to store computed results for different inputs
  
    return function(...args) {
        const key = JSON.stringify(args); // Serialize arguments into a string to use as a key
    
        if (cache.has(key)) { // If the result for the key exists in the cache
            return cache.get(key); // Return the cached result
        }
    
        const result = fn(...args); // Compute the result by calling the original function
        cache.set(key, result); // Store the result in the cache with the serialized key
    
        return result; // Return the computed result
    };
}  
  
function sumArray(arr) {
    if (arr.length === 0) return 0; // Base case: empty array returns 0
    return arr[0] + sumArray(arr.slice(1)); // Recursive case
}
  
  
  const memoizedSumArray = memoize(sumArray);
  const largeArray = Array.from({ length: 5000 }, (_, i) => i + 1);
  
  console.time('Memoized Sum First Call');
  console.log('Total:', memoizedSumArray(largeArray));
  console.timeEnd('Memoized Sum First Call');
  
  console.time('Memoized Sum Second Call (Cached)');
  console.log('Total:', memoizedSumArray(largeArray));
  console.timeEnd('Memoized Sum Second Call (Cached)');