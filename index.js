const express = require('express');
const cookieSession= require( 'cookie-session');
const dotenv= require( 'dotenv');
const bodyParser = require('body-parser');
dotenv.config();



const app = express()


app.use(cookieSession({
    name: 'session',
    keys:'1234',
    maxAge: 60*60*1000, //a hour
}));

app.set('views','./views');
app.set('view engine','ejs');

app.use('/',bodyParser.urlencoded({ extended: false }),require('./middlewares/auth'))
app.use('/login',bodyParser.urlencoded({ extended: false }),require('./router/login'))
app.use('/register',bodyParser.urlencoded({ extended: false }),require('./router/register'))




app.listen(process.env.PORT,()=>{
    console.log(`app listen on ${process.env.PORT}`);
})