const addBtn = document.querySelector('.add');
const inTitle = document.querySelector('#in-title');
const inAuthor = document.querySelector('#in-author');
const bookContainer = document.querySelector('.books');

let myLib = [];

// save to localStorage

function saveMyLib() {
  const str = JSON.stringify(myLib);
  localStorage.setItem('myLib', str);
}

// get from localStorage

function getMyLib() {
  const str = localStorage.getItem('myLib');
  myLib = JSON.parse(str);
  if (!myLib) {
    myLib = [];
  }
}

function displayBook() {
  getMyLib();
  bookContainer.innerHTML = '';
  myLib.forEach((s) => {
    bookContainer.innerHTML += ` 
            <div class="book-item">
                <p class="title">${s.title}</p>
                <p class="Author">${s.author}</p>
                <button class="remove">Remove</button>
            </div>
    `;
  });

  function deleteFunc(index) {
    myLib.splice(index, 1);
    saveMyLib();
    displayBook();
  }

  const deleteButton = bookContainer.querySelectorAll('.remove');
  deleteButton.forEach((key, index) => key.addEventListener('click', () => {
    deleteFunc(index);
  }));
}

function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.saveBook = function () {
  const savedBook = {
    title: this.title,
    author: this.author,
  };

  myLib.unshift(savedBook);
  displayBook();
};

function addBook(e) {
  e.preventDefault();
  const bookTitle = inTitle.value;
  const bookAuthor = inAuthor.value;
  if (inTitle.value !== '' && inAuthor.value !== '') {
    bookContainer.innerHTML = '';
    const insertBook = new Book(bookTitle, bookAuthor);
    insertBook.saveBook();
    inAuthor.value = '';
    inTitle.value = '';
    myLib.push(insertBook);
    saveMyLib();
  }
}

displayBook();
addBtn.addEventListener('click', addBook);