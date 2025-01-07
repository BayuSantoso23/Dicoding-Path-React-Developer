const STORAGE_KEY = "BOOKSHELF_APP";
const RENDER_EVENT = "render-book";
const SAVED_EVENT = "saved-book";
let books = [];

document.addEventListener("DOMContentLoaded", () => {
  const submitForm = document.getElementById("bookForm");
  submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addBook();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

function addBook() {
  const title = document.getElementById("bookFormTitle").value;
  const author = document.getElementById("bookFormAuthor").value;
  const year = parseInt(document.getElementById("bookFormYear").value);
  const isComplete = document.getElementById("bookFormIsComplete").checked;

  const generatedID = generateId();
  const bookObject = generateBookObject(generatedID, title, author, year, isComplete);

  books.push(bookObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function generateId() {
  return new Date().getTime();
}

function generateBookObject(id, title, author, year, isComplete) {
  return {
    id,
    title,
    author,
    year,
    isComplete
  };
}

document.addEventListener(RENDER_EVENT, () => {
  const incompleteBookList = document.getElementById("incompleteBookList");
  incompleteBookList.innerHTML = "";
  const completeBookList = document.getElementById("completeBookList");
  completeBookList.innerHTML = "";

  for (const book of books) {
    const bookElement = makeBook(book);
    if (book.isComplete) {
      completeBookList.append(bookElement);
    } else {
      incompleteBookList.append(bookElement);
    }
  }
});

function makeBook(book) {
  const title = document.createElement("h3");
  title.innerText = book.title;
  title.setAttribute("data-testid", "bookItemTitle");  // Tambahkan data-testid

  const author = document.createElement("p");
  author.innerText = "Penulis: " + book.author;
  author.setAttribute("data-testid", "bookItemAuthor");  // Tambahkan data-testid

  const year = document.createElement("p");
  year.innerText = "Tahun: " + book.year;
  year.setAttribute("data-testid", "bookItemYear");  // Tambahkan data-testid

  const container = document.createElement("div");
  container.classList.add("item", "shadow");
  container.setAttribute("data-bookid", book.id);
  container.setAttribute("data-testid", "bookItem");  // Tambahkan data-testid untuk container

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("inner");
  innerContainer.append(title, author, year);
  container.append(innerContainer);

  if (book.isComplete) {
    const undoButton = document.createElement("button");
    undoButton.innerText = "Belum selesai dibaca";
    undoButton.setAttribute("data-testid", "bookItemUndoButton");  // Tambahkan data-testid
    undoButton.addEventListener("click", function () {
      undoBookFromCompleted(book.id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Hapus Buku";
    deleteButton.setAttribute("data-testid", "bookItemDeleteButton");  // Tambahkan data-testid
    deleteButton.addEventListener("click", function () {
      removeBook(book.id);
    });

    container.append(undoButton, deleteButton);
  } else {
    const completeButton = document.createElement("button");
    completeButton.innerText = "Selesai dibaca";
    completeButton.setAttribute("data-testid", "bookItemIsCompleteButton");  // Tambahkan data-testid
    completeButton.addEventListener("click", function () {
      addBookToCompleted(book.id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Hapus Buku";
    deleteButton.setAttribute("data-testid", "bookItemDeleteButton");  // Tambahkan data-testid
    deleteButton.addEventListener("click", function () {
      removeBook(book.id);
    });

    container.append(completeButton, deleteButton);
  }

  return container;
}

function addBookToCompleted(bookId) {
  const book = findBook(bookId);
  if (book) {
    book.isComplete = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }
}

function undoBookFromCompleted(bookId) {
  const book = findBook(bookId);
  if (book) {
    book.isComplete = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }
}

function removeBook(bookId) {
  const bookIndex = findBookIndex(bookId);
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }
}

function findBook(bookId) {
  return books.find((book) => book.id === bookId);
}

function findBookIndex(bookId) {
  return books.findIndex((book) => book.id === bookId);
}

function saveData() {
  if (isStorageExist()) {
    const data = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, data);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

function isStorageExist() {
  return typeof Storage !== "undefined";
}

function loadDataFromStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    books = JSON.parse(data);
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
}

document.addEventListener(SAVED_EVENT, () => {
  console.log("Data saved to localStorage");
});
