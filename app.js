'use strict'
let booksContainer = document.querySelector('section');
let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = null;
  myLibrary.push(this);
}

function addBookToLibrary(bookArr) {
  for(let i = 0; i < myLibrary.length; i++){
    let bookDiv = document.createElement('div');
    let bookTitle = document.createElement('h3');
    let bookAuth = document.createElement('h4');
    booksContainer.appendChild(bookDiv);
    bookDiv.append(bookTitle, bookAuth);
    bookTitle.textContent = bookArr[i].title;
    bookAuth.textContent = bookArr[i].author;
  }
}
new Book('The Sky Starts Here', 'Ariania Palmer', 240);
new Book('The Fault In Our Stars', 'John Green', 230);
new Book('Test Book', 'Me-- Duh', 777,666,111);
new Book('Test Book', 'Me-- Duh', 888,555,222);
new Book('Test Book', 'Me-- Duh', 999,444,333);
addBookToLibrary(myLibrary);