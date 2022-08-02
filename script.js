const addBtn = document.querySelector('.add');
let inTitle = document.querySelector('#in-title');
let inAuthor = document.querySelector('#in-author');
const bookContainer = document.querySelector('.books'); 
let removeBtn =  document.querySelectorAll('.remove');


let myLib = [];


function Book (title,author) {
    this.title = title;
    this.author = author;
}

Book.prototype.saveBook = function () {
    let savedBook = {
        title : this.title,
        author :this.author
    }
    
    myLib.unshift(savedBook);
    displayBook ();
}
 