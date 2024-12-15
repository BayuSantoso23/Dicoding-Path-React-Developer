// main.js

const bookForm = document.getElementById('bookForm');
const incompleteBookList = document.getElementById('incompleteBookList');
const completeBookList = document.getElementById('completeBookList');
const searchBookForm = document.getElementById('searchBook');
const searchBookTitle = document.getElementById('searchBookTitle');

let books = [];

// Mengambil data buku dari localStorage
document.addEventListener('DOMContentLoaded', () => {
  books = JSON.parse(localStorage.getItem('books')) || [];
  renderBooks();
});

// Menyimpan buku ke localStorage
function saveToLocalStorage() {
  localStorage.setItem('books', JSON.stringify(books));
}

// Render buku ke rak
function renderBooks() {
  incompleteBookList.innerHTML = '';
  completeBookList.innerHTML = '';

  books.forEach((book, index) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-item');
    bookElement.dataset.bookid = index;
    bookElement.innerHTML = `
      <h3 data-testid="bookItemTitle">${book.title}</h3>
      <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
      <p data-testid="bookItemYear">Tahun: ${book.year}</p>
      <div>
        <button data-testid="bookItemIsCompleteButton" onclick="toggleComplete(${index})">
          ${book.isCompleted ? 'Pindahkan ke Belum Selesai' : 'Selesai Dibaca'}
        </button>
        <button data-testid="bookItemDeleteButton" onclick="deleteBook(${index})">
          Hapus Buku
        </button>
        <button data-testid="bookItemEditButton" onclick="editBook(${index})">
          Edit Buku
        </button>
      </div>
    `;

    if (book.isCompleted) {
      completeBookList.appendChild(bookElement);
    } else {
      incompleteBookList.appendChild(bookElement);
    }
  });
}

// Menambahkan buku baru
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newBook = {
    title: document.getElementById('bookFormTitle').value,
    author: document.getElementById('bookFormAuthor').value,
    year: parseInt(document.getElementById('bookFormYear').value),
    isCompleted: document.getElementById('bookFormIsComplete').checked,
  };

  books.push(newBook);
  saveToLocalStorage();
  renderBooks();
  bookForm.reset();
});

// Menghapus buku
function deleteBook(index) {
  books.splice(index, 1);
  saveToLocalStorage();
  renderBooks();
}

// Mengubah status selesai/belum selesai
function toggleComplete(index) {
  books[index].isCompleted = !books[index].isCompleted;
  saveToLocalStorage();
  renderBooks();
}

// Mencari buku berdasarkan judul
searchBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchQuery = searchBookTitle.value.toLowerCase();

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery)
  );

  renderFilteredBooks(filteredBooks);
});

// Render buku yang difilter
function renderFilteredBooks(filteredBooks) {
  incompleteBookList.innerHTML = '';
  completeBookList.innerHTML = '';

  filteredBooks.forEach((book, index) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-item');
    bookElement.dataset.bookid = index;
    bookElement.innerHTML = `
      <h3 data-testid="bookItemTitle">${book.title}</h3>
      <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
      <p data-testid="bookItemYear">Tahun: ${book.year}</p>
      <div>
        <button data-testid="bookItemIsCompleteButton" onclick="toggleComplete(${index})">
          ${book.isCompleted ? 'Pindahkan ke Belum Selesai' : 'Selesai Dibaca'}
        </button>
        <button data-testid="bookItemDeleteButton" onclick="deleteBook(${index})">
          Hapus Buku
        </button>
        <button data-testid="bookItemEditButton" onclick="editBook(${index})">
          Edit Buku
        </button>
      </div>
    `;

    if (book.isCompleted) {
      completeBookList.appendChild(bookElement);
    } else {
      incompleteBookList.appendChild(bookElement);
    }
  });
}
