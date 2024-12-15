document.addEventListener("DOMContentLoaded", function () {
    const bookForm = document.getElementById("bookForm");
    const incompleteBookList = document.getElementById("incompleteBookList");
    const completeBookList = document.getElementById("completeBookList");

    // Menampilkan buku yang tersimpan di localStorage
    loadBooksFromLocalStorage();

    // Menangani submit form untuk menambahkan buku
    bookForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Ambil data dari form
        const title = document.getElementById("bookFormTitle").value;
        const author = document.getElementById("bookFormAuthor").value;
        let year = document.getElementById("bookFormYear").value;
        const isComplete = document.getElementById("bookFormIsComplete").checked;

        // Mengonversi year menjadi number
        year = Number(year);

        // Membuat objek buku baru
        const newBook = {
            id: Date.now().toString(), // menggunakan timestamp sebagai ID unik
            title,
            author,
            year, // sekarang year bertipe number
            isComplete,
        };

        // Tambahkan buku ke daftar
        addBookToList(newBook);

        // Simpan buku ke localStorage
        saveBooksToLocalStorage();

        // Reset form setelah submit
        bookForm.reset();
    });

    // Fungsi untuk menambahkan buku ke daftar
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
            </div>
        `;
        
        // Menambahkan buku ke daftar yang sesuai (selesai atau belum selesai dibaca)
        if (book.isComplete) {
            completeBookList.appendChild(bookItem);
        } else {
            incompleteBookList.appendChild(bookItem);
        }

        // Menambahkan event listener untuk tombol "Selesai dibaca"
        const completeButton = bookItem.querySelector("[data-testid='bookItemIsCompleteButton']");
        completeButton.addEventListener("click", function () {
            book.isComplete = !book.isComplete; // toggle status selesai
            updateBookStatus(book, bookItem);
        });

        // Menambahkan event listener untuk tombol "Hapus Buku"
        const deleteButton = bookItem.querySelector("[data-testid='bookItemDeleteButton']");
        deleteButton.addEventListener("click", function () {
            deleteBook(book.id, bookItem);
        });
    }

    // Fungsi untuk memperbarui status buku (selesai atau belum selesai dibaca)
    function updateBookStatus(book, bookItem) {
        if (book.isComplete) {
            completeBookList.appendChild(bookItem); // Pindahkan ke daftar selesai dibaca
        } else {
            incompleteBookList.appendChild(bookItem); // Pindahkan ke daftar belum selesai dibaca
        }

        // Ubah teks tombol
        const completeButton = bookItem.querySelector("[data-testid='bookItemIsCompleteButton']");
        completeButton.textContent = book.isComplete ? "Belum selesai dibaca" : "Selesai dibaca";

        // Simpan status perubahan ke localStorage
        saveBooksToLocalStorage();
    }

    // Fungsi untuk menghapus buku dari daftar dan localStorage
    function deleteBook(bookId, bookItem) {
        // Hapus elemen buku dari DOM
        if (bookItem) {
            bookItem.remove();
        }

        // Hapus buku dari localStorage
        const books = getBooksFromLocalStorage();
        const filteredBooks = books.filter(book => book.id !== bookId);
        localStorage.setItem("books", JSON.stringify(filteredBooks));
    }

    // Fungsi untuk menyimpan data buku ke localStorage
    function saveBooksToLocalStorage() {
        const books = getBooksFromLocalStorage();
        localStorage.setItem("books", JSON.stringify(books));
    }

    // Fungsi untuk mengambil data buku dari localStorage
    function getBooksFromLocalStorage() {
        const booksData = localStorage.getItem("books");
        return booksData ? JSON.parse(booksData).map(book => {
            // Pastikan year diubah menjadi number saat data dipulihkan
            return {
                ...book,
                year: Number(book.year) // Konversi year kembali menjadi number
            };
        }) : [];
    }

    // Fungsi untuk memuat buku dari localStorage ke daftar
    function loadBooksFromLocalStorage() {
        const books = getBooksFromLocalStorage();
        books.forEach(book => addBookToList(book));
    }
});
