// Making the parameter as array 
function testRest(...ManyArgs){
    console.log(ManyArgs);
    console.log(ManyArgs.length);
}

testRest('satu', 'dua', 'tiga', 'empad', 'lima');

const number = ['satu', 'dua', 'tiga', 'empad', 'lima'];
const [first, second, ...rest] = number;

console.log(first);
console.log(second);
console.log(rest);