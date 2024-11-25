const user = {
    name: "alek",
    'middlename': 'Rodrigo',
    'last name': "sanchez",
    age: 9,
}

console.log(user);
console.log(user.name);
console.log(user['last name']);

const {name, middlename, } = user;
console.log(name, middlename);

// Changing object property
user.name = "Bayu";
console.log(user.name);

// Deleting object property
delete user.age;
console.log(user);