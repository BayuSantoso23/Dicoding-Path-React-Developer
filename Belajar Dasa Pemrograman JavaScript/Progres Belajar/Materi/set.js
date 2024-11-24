const mySet = new Set([1,2,3]);

mySet.add(4);
console.log(mySet);

// Some way to accessing the elements of a set
for (const data of mySet){
    console.log(data);
}

mySet.delete(1);
console.log("");

mySet.forEach((data) => console.log(data));