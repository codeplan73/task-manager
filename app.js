require('dotenv').config();
require('express-async-errors');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express()


// routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes')

// app use package
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/tasks', taskRoutes)


const port = process.env.PORT;

const start = async () => {
    try {
        app.listen(port, console.log(`Server runing on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start();