'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Connect to Mongodb
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://database/dockerdemo");
mongoose.connection.on('error', (err) => {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
});

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});
const Product = mongoose.model('Product', productSchema);

// App
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.get('/products', (req, res) => {
    Product.find((err, users) => {
        res.json(users);
    });
});

app.post('/products', (req, res) => {
    let product = new Product(req.body);
    product.save((err) => {
        Product.find((err, users) => {
            res.json(users);
        });
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);