// The new array here is gotten from iteration of each array using map
// Which we can also say as callback function
console.log('ARRAY MAP :')
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas']
    .map((name) => `${name}!`);

console.log(newArray); // Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

// Array filtering 
// The system is close to the previous one 
console.log('ARRAY FILTERING :')
const truthyArray = [1, '', 'Halo', 0, null, 'Harry', 14]
  .filter((item) => Boolean(item));

console.log(truthyArray); // Output: [ 1, 'Halo', 'Harry', 14 ]

const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
  
  console.log(eligibleForScholarshipStudents);
  
  /**
   * Output:
   * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
   * 
   */

// Array reduce
// The reduce() method executes a user-supplied "reducer" callback function on each element of
// the array (from left-to-right) so as to reduce it to a single value
console.log('ARRAY REDUCE :')
const murid = [
    {
      name: 'Harry',
      nilai: 60,
    },
    {
      name: 'James',
      nilai: 88,
    },
    {
      name: 'Ron',
      nilai: 90,
    },
    {
      name: 'Bethy',
      nilai: 75,
    }
  ];
  
  const totalNilai = murid.reduce((acc, murid) => acc + murid.nilai, 0);
  
  console.log(totalNilai); // Output: 313

// Array Freeze
// The freeze() method prevents all properties of an object from being changed
// I think in my case it didn't give an output, instead :
// TypeError: Cannot assign to read only property 'emailPengguna' of object '#<Object>'
// Giving error that defining that i cannot assign to read only property
// console.log('ARRAY FREEZE :')
// const pengguna = {
//     nama: 'John',
//     emailPengguna: 'john@dicoding.com',
//   };
  
//   // Membekukan objek user
//   Object.freeze(pengguna);
  
//   // Mencoba mengubah properti dari objek yang dibekukan
//   pengguna.emailPengguna = 'doe@dicoding.com';
//   console.log(pengguna); // Output: { name: 'John', email: 'john@dicoding.com' }

// Example of freezeing every property of an object
// function deepFreeze(object) {
//     Object.keys(object).forEach((name) => {
//       const prop = object[name];
//       if (typeof prop == 'object' && prop !== null) {
//         deepFreeze(prop);
//       }
//     });
  
//     return Object.freeze(object);
//   }
  
//   const complexUser = {
//     name: 'Bob',
//     email: 'bob@dicoding.com',
//     preferences: {
//       newsletter: true,
//       notifications: 'weekly',
//       address: {
//         city: 'New York',
//         zip: '10001'
//       }
//     }
//   };
  
//   deepFreeze(complexUser);
  
//   // Diabaikan
//   complexUser.preferences.address.city = 'Los Angeles';
  
//   console.log(complexUser.preferences.address.city); // Output: 'New York'