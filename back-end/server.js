// server.js
const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// const Inventory = require('./src/models/Inventory');
const Inventory = require('./src/routes/inventory')
const Export = require('./src/routes/export')

const morgan =  require('morgan')
const {default: helmet} = require('helmet');
const compression = require("compression");

// Body parser middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

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
// app.get('/api/inventory', (req, res) => {
//   Inventory.find()
//     .then(inventory => res.json(inventory))
//     .catch(err => console.log(err));
// });

// app.post('/api/inventory', (req, res) => {
//   const { productName, quantity, price, images } = req.body;

//   const newInventory = new Inventory({
//     id: parseInt(Math.random()),
//     productName,
//     quantity: parseInt(quantity),
//     price: parseFloat(price),
//     images: images
//   });

//   newInventory.save()
//     .then(inventory => res.json(inventory))
//     .catch(err => console.log(err));
// });


app.use('/api/inventory', Inventory)
app.use('/api/export', Export)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
