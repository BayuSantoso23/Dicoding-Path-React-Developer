// High Order Function or HOF
// A function that takes another function as an argument or returns a function as a result
function apply(operation, ...args) {
    // kita bisa menambahkan kode lain sebelum operation dijalankan.
    
    // Returning operations present below either sum or discount
    return operation(...args)
  }
  
// Called from args in apply function
  function sum(a, b, c) {
    return a + b + c;
  }
  
  function discount(disc, value) {
    return value - ((disc / 100) * value);
  }
  
  const productPrice = apply(sum, 100, 100, 200);
  const withDiscount = apply(discount, 25, productPrice);
  
  console.log('Product price:', productPrice); // Output: Product price: 400
  console.log('With discount 25%:', withDiscount); // Output: With discount 25%: 300