const Promise = require('bluebird');
const dotenv =require ('dotenv');


dotenv.config();

const initOptions = {
    promiseLib: Promise
};
const pgp = require('pg-promise')(initOptions);
const db = pgp(process.env.CONECTION);

module.exports =db;