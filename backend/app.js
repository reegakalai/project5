const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
const connectDatabase = require('./config/connectDatabase');
const cors =require('cors');

// Configure environment variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });


connectDatabase();
// app.use(express.json())

// Routes
const products = require('./routes/product');
const orders = require('./routes/order');

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(cors());   //it send the response to the header

app.use('/api/v1/',products);
app.use('/api/v1/',orders);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});





