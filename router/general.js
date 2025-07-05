const express = require('express');
let books = require("./booksdb.js");
let users = require("./auth_users.js").users;
const public_users = express.Router();

//Register a new user
public_users.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required." });
  }

  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.status(409).json({ message: "Username already exists. Please choose another." });
  }

  users.push({ username, password });
  return res.status(201).json({ message: "User registered successfully!" });
});

// Get all books
public_users.get('/', (req, res) => {
  return res.status(200).json({ books });
});

// Get book details by ISBN
public_users.get('/isbn/:isbn', (req, res) => {
  const { isbn } = req.params;
  const book = books[isbn];
  if (book) {
    return res.status(200).json(book);
  }
  return res.status(404).json({ message: "Book not found for the given ISBN." });
});

// Get books by author
public_users.get('/author/:author', (req, res) => {
  const { author } = req.params;
  const matchingBooks = Object.values(books).filter(b => b.author === author);
  if (matchingBooks.length > 0) {
    return res.status(200).json({ books: matchingBooks });
  }
  return res.status(404).json({ message: "No books found for the given author." });
});

// Get books by title
public_users.get('/title/:title', (req, res) => {
  const { title } = req.params;
  const matchingBooks = Object.values(books).filter(b => b.title === title);
  if (matchingBooks.length > 0) {
    return res.status(200).json({ books: matchingBooks });
  }
  return res.status(404).json({ message: "No books found for the given title." });
});

//Get reviews for a book
public_users.get('/review/:isbn', (req, res) => {
  const { isbn } = req.params;
  const book = books[isbn];
  if (book && book.reviews) {
    return res.status(200).json({ reviews: book.reviews });
  }
  return res.status(404).json({ message: "No reviews found for this ISBN." });
});

module.exports.general = public_users;
