// server.js
const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Product = require('./src/models/Product');
const cors = require('cors');
const app = express();

const morgan =  require('morgan')
const {default: helmet} = require('helmet');
const compression = require("compression");

// Body parser middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173' }));

// const uri = "mongodb+srv://hothanhtung12:gDUOhoO2bUC4itCF@cluster0.ib0vmxo.mongodb.net/";


// MongoDB connection
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));
require('./src/dbs/init.mongodb')

// init middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// Routes
app.get('/api/products', (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => console.log(err));
});

app.post('/api/products', (req, res) => {
  const { productName, quantity, price, images } = req.body;

  const newProduct = new Product({
    id: parseInt(Math.random()),
    productName,
    quantity: parseInt(quantity),
    price: parseFloat(price),
    images: images
  });

  newProduct.save()
    .then(product => res.json(product))
    .catch(err => console.log(err));
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
