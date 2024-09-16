const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for serving static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set up routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}');
});