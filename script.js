const addBtn = document.querySelector('.add');
let inTitle = document.querySelector('#in-title');
let inAuthor = document.querySelector('#in-author');
const bookContainer = document.querySelector('.books'); 
let removeBtn =  document.querySelectorAll('.remove');


let myLib = [];


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

    addBook (e){
        e.preventDefault();
        let bookTitle = inTitle.value;
        let bookAuthor = inAuthor.value;
        
        if(inAuthor.value !== '' && inTitle.value !== '') { 
            bookContainer.innerHTML = '';
            let insertBook = new Book (bookTitle,bookAuthor);
            insertBook.saveBook();
            inAuthor.value = '';
            inTitle.value = '';
        } 
    }
    
    displayBook () { 
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
        this.displayBook();
    }
}

const bookStore = new Book()
bookStore.displayBook();
addBtn.addEventListener('click', bookStore.addBook);