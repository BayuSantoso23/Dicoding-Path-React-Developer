function fibonacci(n) {
    if (n === 0) {
      return [0]; 
    }
    if (n === 1) {
      return [0, 1]; 
    }
  
    const previousSequence = fibonacci(n - 1); 
    const nextNumber = previousSequence[previousSequence.length - 1] + previousSequence[previousSequence.length - 2];
    return [...previousSequence, nextNumber]; 
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
  