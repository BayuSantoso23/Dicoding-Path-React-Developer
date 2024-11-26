// Importing 1 function doesn`t require specific func name
// import test from './contohExport.js';

// Inside bracket means to specified the exported function
// import {myFunction} from './contohExport.js';

// Importing Multiple
// import {name, email, age} from './contohExport.js';

// test();
// console.log(name);
// console.log(email);
// console.log(age);

// Another method if importing many func.
// import * as variable from './contohExport.js';

// console.log(variable.name);
// console.log(variable.email);
// console.log(variable.age);


import {myFunction as exp1} from './contohExport.js';
import {myFunction as exp2} from './contohExport2.js';

exp1();
exp2();