// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Inventory = require('./src/routes/inventory')
const Export = require('./src/routes/export')
require('./src/dbs/init.mongodb')
const morgan =  require('morgan')
const {default: helmet} = require('helmet');
const compression = require("compression");

require('dotenv').config()

// Body parser middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost' }));
app.use(express.static('uploads'))




// init middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))



app.use('/api/inventory', Inventory)
app.use('/api/export', Export)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
