document.addEventListener("DOMContentLoaded", function () {
    const bookForm = document.getElementById("bookForm");
    const incompleteBookList = document.getElementById("incompleteBookList");
    const completeBookList = document.getElementById("completeBookList");

    // Menyimpan buku baru ke localStorage
    function saveBooksToLocalStorage() {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        localStorage.setItem('books', JSON.stringify(books));
    }

    // Menambah buku ke dalam rak
    function addBookToList(book) {
        const bookItem = document.createElement("div");
        bookItem.setAttribute("data-bookid", book.id);
        bookItem.setAttribute("data-testid", "bookItem");
        bookItem.innerHTML = `
            <h3 data-testid="bookItemTitle">${book.title}</h3>
            <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
            <p data-testid="bookItemYear">Tahun: ${book.year}</p>
            <div>
                <button data-testid="bookItemIsCompleteButton">${book.isComplete ? "Belum selesai dibaca" : "Selesai dibaca"}</button>
                <button data-testid="bookItemDeleteButton">Hapus Buku</button>
                <button data-testid="bookItemEditButton">Edit Buku</button>
            </div>
        `;

        // Menambahkan buku ke rak yang sesuai
        if (book.isComplete) {
            completeBookList.appendChild(bookItem);
        } else {
            incompleteBookList.appendChild(bookItem);
        }

        // Menambahkan event listener untuk tombol "Selesai dibaca"
        const completeButton = bookItem.querySelector("[data-testid='bookItemIsCompleteButton']");
        completeButton.addEventListener("click", function () {
            book.isComplete = !book.isComplete;
            updateBookStatus(book, bookItem);
        });

        // Menambahkan event listener untuk tombol "Hapus Buku"
        const deleteButton = bookItem.querySelector("[data-testid='bookItemDeleteButton']");
        deleteButton.addEventListener("click", function () {
            deleteBook(book.id, bookItem);
        });

        // Menambahkan event listener untuk tombol "Edit Buku"
        const editButton = bookItem.querySelector("[data-testid='bookItemEditButton']");
        editButton.addEventListener("click", function () {
            // Tampilkan alert sebagai pengganti fitur edit
            alert(`Fitur Edit Buku sedang dalam pengembangan.`);
        });
    }

    // Fungsi untuk memperbarui status buku
    function updateBookStatus(book, bookItem) {
        if (book.isComplete) {
            completeBookList.appendChild(bookItem);
        } else {
            incompleteBookList.appendChild(bookItem);
        }

        // Ubah teks tombol
        const completeButton = bookItem.querySelector("[data-testid='bookItemIsCompleteButton']");
        completeButton.textContent = book.isComplete ? "Belum selesai dibaca" : "Selesai dibaca";

        saveBooksToLocalStorage(); // Simpan perubahan ke localStorage
    }

    // Fungsi untuk menghapus buku dari daftar
    function deleteBook(bookId, bookItem) {
        bookItem.remove();

        let books = JSON.parse(localStorage.getItem('books')) || [];
        books = books.filter(book => book.id !== bookId);
        localStorage.setItem('books', JSON.stringify(books));
    }

    // Menyimpan buku baru ke localStorage
    function saveBook(book) {
        let books = JSON.parse(localStorage.getItem('books')) || [];
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    // Menangani submit form untuk menambahkan buku
    bookForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const title = document.getElementById("bookFormTitle").value;
        const author = document.getElementById("bookFormAuthor").value;
        const year = document.getElementById("bookFormYear").value;
        const isComplete = document.getElementById("bookFormIsComplete").checked;

        const newBook = {
            id: Date.now().toString(),
            title,
            author,
            year,
            isComplete
        };

        addBookToList(newBook);
        saveBook(newBook); // Simpan buku ke localStorage
        bookForm.reset(); // Reset form
    });

    // Memuat buku dari localStorage dan menampilkannya
    function loadBooksFromLocalStorage() {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        books.forEach(book => addBookToList(book));
    }

    // Muat buku saat halaman dimuat
    loadBooksFromLocalStorage();
});
