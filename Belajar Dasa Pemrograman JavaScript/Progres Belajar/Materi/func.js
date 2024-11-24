// function convertCelciusToFahrenheit(temp){
//     if(temp == undefined || temp == null || temp == "null"){
//         console.log('Angka belum diinput');
//     }else{
        
//     const formula = (9 / 5) * temp + 32;

//     console.log('Hasil: ' + formula);

//     return formula;
//     }
// }

// ConciseSyntax
const convertCelciusToFahrenheit = (temp = 90) => (9 / 5) * temp + 32;

const num1 = 30;
const num2 = 90;

convertCelciusToFahrenheit(num1);
convertCelciusToFahrenheit(num2);

console.log('Hasil : ' + convertCelciusToFahrenheit(num1));
console.log('Hasil : ' + convertCelciusToFahrenheit(num2));