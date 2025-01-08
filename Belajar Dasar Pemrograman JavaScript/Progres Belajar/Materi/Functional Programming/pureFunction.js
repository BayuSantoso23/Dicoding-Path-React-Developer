// This is not pure function since it has side effect of printing the result
// and it wont give the same result every time it get called 
// since value of x is changing every time it get called
let value = 0;

function addWith(addingValue) {
  value += addingValue;
  console.log(`Current value is ${value}`);
  return value;
}

const result1 = addWith(1); // Output: Current value is 1
const result2 = addWith(1); // Output: Current value is 2
const result3 = addWith(1); // Output: Current value is 3

console.log(result1, result2, result3); // Output: 1, 2, 3

// This is the example of pure function
function tambah(value, addingValue) {
    return value + addingValue;
  }
  
  const hasil1 = tambah(0, 1);
  console.log(`hasil1 is ${hasil1}`); // Output: result1 is 1
  
  const hasil2 = tambah(result1, 1);
  console.log(`hasil2 is ${hasil2}`); // Output: result2 is 2
  
  const hasil3 = tambah(result2, 1);
  console.log(`hasil3 is ${hasil3}`); // Output: result3 is 3
  
  console.log(hasil1, hasil2, hasil3); // Output: 1, 2, 3

// More exmp of impure
// Mengubah nilai variabel global
let count = 0;
function increment() {
  count++;
}
 
// Mengakses waktu sistem
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}
 
// Mengubah status objek yang diterima sebagai parameter
function updateUser(user) {
  user.name = "Updated Name";
}
 
// Menulis ke berkas
const fs = require('fs');
 
function writeToFile(data) {
  fs.writeFileSync('data.txt', data);
}

// More exmp of pure
// Menghitung total harga pesanan tanpa mengubah input
function calculateTotalPrice(orderItems) {
    return orderItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
   
  // Memfilter dan memetakan data tanpa mengubah array asli
  function getActiveUsernames(users) {
    return users
      .filter(user => user.isActive)
      .map(user => user.username);
  }
   
  // Membuat objek baru berdasarkan input tanpa mengubah input asli
  function createUserProfile(user, address) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      address: {
        street: address.street,
        city: address.city,
        country: address.country
      }
    };
  }
   
  // Menggabungkan dua objek tanpa mengubah objek asli
  function mergeSettings(defaultSettings, userSettings) {
    return {
      ...defaultSettings,
      ...userSettings
    };
  }