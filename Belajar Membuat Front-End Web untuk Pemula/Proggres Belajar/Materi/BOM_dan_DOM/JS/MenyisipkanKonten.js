// Changing pucture size
const gambar = document.getElementById('gambar');
gambar.setAttribute('width', 300);
gambar.setAttribute('height', 215);

// Mengubah attribute button Play
const buttons = document.querySelectorAll('.button');
const playButton = buttons[3];
// Kita bisa menggunakan properti children yang akan mengembalikan semua 
// child element yang terdapat di dalam tag <div> dalam bentuk HTMLCollection. 
// Karena elemen tersebut hanya memiliki satu child element, kita bisa memanggilnya dengan indeks 0.
const playButtonElement = playButton.children[0];
playButtonElement.setAttribute('type', 'submit');

const links = document.getElementById('links');

// Modify dicoding text
const dicoding = document.getElementById('dicodingLink');
dicoding.innerText = "Belajar dicoding";
dicoding.innerHTML =  '<i>Belajar di dicoding</i>';

const button = document.getElementsByClassName('button');
for (const button of buttons) {
    button.children[0].style.borderRadius = '6px';
}