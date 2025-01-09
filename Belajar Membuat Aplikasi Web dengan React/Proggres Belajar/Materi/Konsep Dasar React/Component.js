// React component adalah fungsi yang mengembalikan objek

// Fungsi ini bersifat reusable.
// function cart({manufacture, type, color}){
//     return {
//         manufacture,
//         type,
//         color,
//         unitcode: `${+new Date()}-${manufacture}-${type}-${color}`,
//     }
// }

// React component mengembalikan sebuah UI dalam bentuk React element.
// function Car({ manufacture, type, color }) {
//     return (
//       <div className='car-info'>
//         <dt>Manufacture:</dt>
//         <dd>{manufacture}</dd>
//         <dt>Type:</dt>
//         <dd>{type}</dd>
//         <dt>Color:</dt>
//         <dd>{color}</dd>
//       </div>
//     );