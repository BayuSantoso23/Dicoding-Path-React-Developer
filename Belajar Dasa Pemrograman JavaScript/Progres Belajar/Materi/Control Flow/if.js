const ada = true

if(ada){
    console.log("hadir")
}else{
    console.log("tidak hadir")
}

const num = 10

if(num > 10){
    console.log("lebih besar")
}else if (num < 10){
    console.log("lebih kecil")
}else{
    console.log("Sama dengan")
}

// Using ternary
const nama = true
// const result = condition ? value1 : value2
const result = nama ? "Ada Nama" : "Tidak ada nama" 
console.log(result)