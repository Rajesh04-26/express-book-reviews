
# 📚 Online Book Review API
This is a Node.js and Express-based API that allows users to browse books, register accounts, log in, and add/update/delete reviews for books. The project was built as part of the **IBM Full Stack Software Developer Professional Certificate** on **Coursera**.

## 🚀 Features
-✅ View all available books in the shop
-✅ Search books by **ISBN**, **author**, or **title**
-✅ Register as a new user
-✅ Login securely using JWT authentication
-✅ Add, update, and delete book reviews (authenticated users only)

### 📖 Public Routes
* `GET /` - Get all books
* `GET /isbn/:isbn` - Get book details by ISBN
* `GET /author/:author` - Get books by author
* `GET /title/:title` - Get books by title
* `GET /review/:isbn` - Get reviews for a book
* `POST /register` - Register a new user

### 🔒 Authenticated Routes (`/customer/auth/*`)
* `POST /login` - Login as registered user
* `PUT /auth/review/:isbn` - Add/Update a book review
* `DELETE /auth/review/:isbn` - Delete your book review

## 🛠️ Tech Stack
* **Node.js**
* **Express.js**
* **JWT (JSON Web Tokens)** for authentication
* **Session Management** with express-session

4. Server runs on:
```
http://localhost:5000
```

## 🎓 About This Project
This project is part of the **"Building RESTful APIs with Node.js and Express"** assignment from IBM’s **Full Stack Developer Certificate** on Coursera.
