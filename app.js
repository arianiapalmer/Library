'use strict'
let booksContainer = document.getElementById('books-container');
let newBookBtn = document.getElementById('new-book');
let allBooks = [];

function Book(title, author, pages, read = null) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = ;
  allBooks.push(this);
}
Book.prototype.read = function(){

  return
}
function addBookToLibrary(bookArr) {
  for(let i = 0; i < allBooks.length; i++){
    let bookDiv = document.createElement('div');
    bookDiv.className = 'card'
    let bookTitle = document.createElement('h3');
    let bookAuth = document.createElement('h4');
    let bookPages = document.createElement('p');
    booksContainer.appendChild(bookDiv);
    bookDiv.append(bookTitle, bookAuth, bookPages);
    bookTitle.textContent = bookArr[i].title;
    bookAuth.textContent = bookArr[i].author;
    bookPages.textContent = bookArr[i].pages;
  }
}
new Book('The Sky Starts Here', 'Ariania Palmer', 240);
new Book('The Fault In Our Stars', 'John Green', 230);
new Book('Test Book', 'Me-- Duh', 777,666,111);
new Book('Test Book', 'Me-- Duh', 888,555,222);
new Book('Test Book', 'Me-- Duh', 999,444,333);
addBookToLibrary(allBooks);