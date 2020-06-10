const express = require('express');
const cookieSession= require( 'cookie-session');
const dotenv= require( 'dotenv');
const bodyParser = require('body-parser');
const login = require('./router/login');
const register = require('./router/register');
const db = require('./services/db')
dotenv.config(); // set environment variables



const app = express()


app.use(cookieSession({
    name: 'session',
    keys:['1234'],
    maxAge: 60*60*1000, //a hour
}));

app.set('views','./views');
app.set('view engine','ejs');

app.use('/',bodyParser.urlencoded({ extended: false }),login);
app.use('/register',bodyParser.urlencoded({ extended: false }),register);





app.listen(process.env.PORT,
    console.log(`app listen on ${process.env.PORT}`)
);


