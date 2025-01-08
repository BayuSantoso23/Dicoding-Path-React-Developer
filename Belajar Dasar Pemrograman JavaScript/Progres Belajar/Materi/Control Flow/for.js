for(i = 0; i < 5; i++){
    console.log(`angka ke ${i}`);
}

// For in
// Used for iterate all value inside of object
const nama = {nama1: 'alek', nama2: 'budi', nama3: 'cici'}

for (const allNama in nama){
    console.log(`${allNama} : ${nama[allNama]}`);
}

// For of
// Not requiring key n value
const listNama = ['budi', 'siregar', 'cahyono']
for (const allName of listNama){
    console.log(allName);
}
