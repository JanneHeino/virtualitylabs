/*
const express = require('express');
const cors = require('cors'); 
const imagesRoute = require('./images'); 
//const emailRoute = require('./routes/emailRoutes');
const email = require('./sendemail');

const app = express();



app.use(cors()); 
app.use(express.json());

app.use('/api/sendEmail', email);
app.use('/api/images', imagesRoute);
//app.use('http://localhost:3001/api/sendEmail', emailRoute);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

*/


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routers
const emailRouter = require('./sendemail');
const imagesRouter = require('./images');

const app = express();

// Middleware
app.use(cors());  // Enable CORS
app.use(express.json());  // Body parser for JSON requests
app.use(bodyParser.urlencoded({ extended: true }));  // Body parser for URL-encoded forms

// Use routers
app.use('/api/sendEmail', emailRouter);
app.use('/api/images', imagesRouter);

// Optionally serve static files
app.use(express.static('public'));

// Default route for testing if the server is up
app.get('/', (req, res) => {
    res.send('Server is running...');
});

// Set the port
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});