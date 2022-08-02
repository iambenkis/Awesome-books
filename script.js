const addBtn = document.querySelector('.add');
let inTitle = document.querySelector('#in-title');
let inAuthor = document.querySelector('#in-author');
const bookContainer = document.querySelector('.books'); 
let removeBtn =  document.querySelectorAll('.remove');


let myLib = [];


class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    saveBook() {
        let savedBook = {
            title: this.title,
            author: this.author
        };

        myLib.unshift(savedBook);
        displayBook();
    }
}

    
function addBook (e){
    e.preventDefault();
    let bookTitle = inTitle.value;
    let bookAuthor = inAuthor.value;
    bookContainer.innerHTML = '';
    if(bookAuthor!== '' && bookTitle!== '') { 
        let insertBook = new Book (bookTitle,bookAuthor);
        insertBook.saveBook();
    }
}

function displayBook (){ 
    bookContainer.innerHTML = '';
    myLib.forEach((s) => {
    bookContainer.innerHTML += ` 
            <div class="book-item">
                <p class="title">${s.title}</p>
                <p class="Autor">${s.author}</p>
                <button class="remove">Remove</button>
            </div>
    `; 
}); 

let deleteButton = bookContainer.querySelectorAll('.remove');  
deleteButton.forEach((key,index) => key.addEventListener('click', ()=> {
    deleteFunc(index);
}))   
}

function deleteFunc (index) {
myLib.splice(index,1);
displayBook();
}

displayBook();
addBtn.addEventListener('click', addBook);