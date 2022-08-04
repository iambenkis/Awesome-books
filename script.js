const addBtn = document.querySelector('.add');
const inTitle = document.querySelector('#in-title');
const inAuthor = document.querySelector('#in-author');
const bookContainer = document.querySelector('.books');
const links = document.querySelectorAll('.link');
const slides = document.querySelectorAll('.slide');

let myLib = [];

// save to localStorage

const saveMyLib = () => {
  const str = JSON.stringify(myLib);
  localStorage.setItem('myLib', str);
};

// get from localStorage

const getMyLib = () => {
  const str = localStorage.getItem('myLib');
  myLib = JSON.parse(str);
  if (!myLib) {
    myLib = [];
  }
};

class Book {
  constructor(title = '', author = '') {
    this.title = title;
    this.author = author;
  }

  saveBook() {
    const savedBook = {
      title: this.title,
      author: this.author,
    };
    myLib.unshift(savedBook);
    this.displayBook();
  }

  displayBook() {
    getMyLib();
    bookContainer.innerHTML = '';
    myLib.forEach((s) => {
      bookContainer.innerHTML += ` 
                <div class="book-item">
                    <p class="title"> "${s.title}" by ${s.author}</p> 
                    <button class="remove">Remove</button>
                </div>
        `;
    });

    const deleteButton = bookContainer.querySelectorAll('.remove');
    deleteButton.forEach((key, index) => key.addEventListener('click', () => {
      this.deleteFunc(index);
    }));
  }

  deleteFunc(index) {
    myLib.splice(index, 1);
    saveMyLib();
    this.displayBook();
  }

  addBook = (e) => {
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
      window.location.reload();
    }
  }
}

const bookStore = new Book();
bookStore.displayBook();
addBtn.addEventListener('click', bookStore.addBook);

links.forEach((link, id) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    slides.forEach((slide) => {
      slide.classList.add('disable');
    });
    slides[id].classList.remove('disable');
  });
});