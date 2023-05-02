require('dotenv').config();
require('express-async-errors');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express()

// app use package
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: false }));


const port = process.env.PORT;

const start = async () => {
    try {
        app.listen(port, console.log(`Server runing on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start();