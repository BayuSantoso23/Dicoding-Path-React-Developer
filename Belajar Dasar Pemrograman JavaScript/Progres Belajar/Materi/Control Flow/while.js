let j = 10;
while (j < 16){
    console.log(`angka - ${j}`)
    j++
} 

// Do while
let i = 1;

do{
    console.log(`angka : ${i}`);
}while(i > 1)

// Break
for (let k = 0; k < 10; k++) {
    if (k === 5) {
    //   continue; 5 itself wont be printed because the process stop at five 
    // and continue at next iteration
      break;
    }
  
    console.log(k);
  }