// Making OOP before ES6
function Person(name, age){
    this.name = name;
    this.age = age;
}

personalbar.prototype.eat = function(){
    console.log(`${this.name} is eating`);
}

const person1 = new Person('alek', 80);
const person2 = new Person('Budi', 100);

console.log(person1.name);
console.log(person2.name);

person1.eat()
person2.eat()