import { name, favoriteFood as food, sayHi } from './contohExport3.js';
 
console.log(name);
console.log(food);
sayHi(name);

// using select *
import * as user from './contohExport3.js';
 
console.log(user.name);
console.log(user.favoriteFood);
user.sayHi(user.name);