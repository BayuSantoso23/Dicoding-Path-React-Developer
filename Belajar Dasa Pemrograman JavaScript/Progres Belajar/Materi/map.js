const productMap = new Map([
    ['shoes', 7500],
    ['cap', 450],
    ['shirt', 1500],
]);

// Adding data to Map
productMap.set('Shorts', 2000);

// Print all
console.log(productMap)

// Get spesific value from key
console.log(productMap.get('shoes'));

// Deleting
productMap.delete('cap');

// Print all
console.log(productMap)
