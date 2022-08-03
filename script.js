const addBtn = document.querySelector('.add');
const inTitle = document.querySelector('#in-title');
const inAuthor = document.querySelector('#in-author');
const bookContainer = document.querySelector('.books');

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
        let savedBook = {
            title: this.title,
            author: this.author
        };

        myLib.unshift(savedBook);
        this.displayBook();
    }

    displayBook () {
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
    
        let deleteButton = bookContainer.querySelectorAll('.remove');  
        deleteButton.forEach((key,index) => key.addEventListener('click', ()=> {
            this.deleteFunc(index);
        }))   
    }
    
    deleteFunc (index) {
        myLib.splice(index,1);
        saveMyLib();
        this.displayBook();
    }

addBook(e){
  e.preventDefault();
  let bookTitle = inTitle.value;
  let bookAuthor = inAuthor.value;

  if (inTitle.value !== '' && inAuthor.value !== '') {
    bookContainer.innerHTML = '';
    let insertBook = new Book(bookTitle, bookAuthor);

    insertBook.saveBook();
    inAuthor.value = '';
    inTitle.value = '';
    myLib.push(insertBook);
    saveMyLib();
    window.location.reload();
  }
}}

const bookStore = new Book()
bookStore.displayBook();
addBtn.addEventListener('click', bookStore.addBook);