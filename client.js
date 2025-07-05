const axios = require('axios');

// Get all books
axios.get('http://localhost:5000/')
  .then(res => console.log("All books:", res.data))
  .catch(err => console.error(err.message));

// Get book by ISBN
axios.get('http://localhost:5000/isbn/1')
  .then(res => console.log("Book by ISBN:", res.data))
  .catch(err => console.error(err.message));

// Get books by author
axios.get('http://localhost:5000/author/Jane Austen')
  .then(res => console.log("Books by author:", res.data))
  .catch(err => console.error(err.message));

// Get books by title
axios.get('http://localhost:5000/title/Pride and Prejudice')
  .then(res => console.log("Books by title:", res.data))
  .catch(err => console.error(err.message));
