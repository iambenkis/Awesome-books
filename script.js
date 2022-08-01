const title = document.querySelectorAll('.title');
const author = document.querySelectorAll('.author');
const removeBtn = document.querySelector('.remove');
const addBtn = document.querySelector('.add');
const inTitle = document.querySelector('#in-title');
const inAuthor = document.querySelector('#in-author');
const bookContainer = document.querySelector('.books');
const store = [
    {
        title:'the law',
        author: 'benk',
    },
    {
        title:'the book1',
        author: 'benk',
    }
];

const displayBook = (store) => {
    store.map(s => {
        bookContainer.innerHTML += `
            <div class="book-item">
                <p class="title">${s.title}it</p>
                <p class="Autor">${s.author}</p>
                <button class="remove">Remove</button>
            </div> 
        `
    });
}

displayBook(store);