// This topic mainly focus on Immutability

// Array.push: menambahkan elemen di akhir dari sebuah array.
// Array.pop: menghapus elemen terakhir dari sebuah array.
// Array.shift: menghapus elemen pertama dari sebuah array.
// Array.unshift: menambahkan elemen di awal dari sebuah array.
// Array.splice: menambahkan atau menghapus elemen di posisi tertentu dari sebuah array.
// Array.reverse: membalikkan urutan elemen dari sebuah array.
// Array.sort: mengurutkan elemen dari sebuah array.
// Object.assign: memodifikasi properti dari object.

// Example
function max(arrayOfNumbers) {
    return arrayOfNumbers
      .sort((a, b) => a - b)
      .pop();
  }
  
  const numbers = [10, 23, 24, 7, 42, 18];
  const largest = max(numbers);
  
  console.log(largest); // Output: 42
  console.log(numbers); // Output: [ 7, 10, 18, 23, 24 ]

// This can also happend with Object.assign
function registerEmail(person, email) {
    return Object.assign(person, { email });
}

const person = {
    name: 'John',
    username: 'johndoe',
};

const personWithEmail = registerEmail(person, 'john@dicoding.com');

console.log(person); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }