const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(session({
  secret: "fingerprint_customer",
  resave: false,
  saveUninitialized: true,
}));

// Auth middleware
app.use("/customer/auth/*", function auth(req, res, next) {
  if (!req.session.authorization) {
    return res.status(401).json({ message: "Unauthorized: No session token provided" });
  }

  const token = req.session.authorization.accessToken;
  jwt.verify(token, "access_secret", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
    req.user = user;
    next();
  });
});

// Routes
app.use("/customer", customer_routes);
app.use("/", genl_routes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
