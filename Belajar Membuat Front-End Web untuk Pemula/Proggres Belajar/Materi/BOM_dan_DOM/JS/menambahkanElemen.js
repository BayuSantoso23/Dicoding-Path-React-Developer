// Append child, inserting element at the end of the list
const newElement = document.createElement('li');
newElement.innerText = 'Selamat menikmati!';

const daftar = document.getElementById('daftar');
daftar.appendChild(newElement);

// Insert before, inserting element at the beginning of the list
// (1) elemen baru yang ingin disisipkan dan 
// (2) child element yang akan dijadikan patokan diletakkannya elemen baru. 
const elemenAwal = document.createElement('li');
elemenAwal.innerText = 'Menyalakan kompor';

const itemAwal = document.getElementById('awal');
daftar.insertBefore(elemenAwal, itemAwal);

