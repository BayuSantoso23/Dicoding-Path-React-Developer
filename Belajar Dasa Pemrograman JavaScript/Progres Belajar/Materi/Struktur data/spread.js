// Spread is used to spreading values inside the object and array
const obj1 = { name: 'Dicoding' };
const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };

// Copying object
const obj3 = {...obj1};

// Spreading object
const newObj = { ...obj1, ...obj2 };

// Same as Array
const array1 = ['Dicoding'];
const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];

const newArray = [...array1, ...array2];

// Copying object in array
const array3 = {...array1};

console.log(newObj); 
console.log(newArray);