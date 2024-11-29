// Without functional proggramming we more focused to :
// What to solve
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

// Without functional proggramming we more focused to :
// how to solve
// Simpler and more efficient 
const animals = ['bird', 'Chicken', 'Cat', 'Dog'];

const newAnimals = animals.map((animals) => `${animals}!`);

console.log(newAnimals); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]