const dotenv =require ('dotenv');
const Sequelize =require ('sequelize');
dotenv.config();

const conectionString = process.env.CONECTION;
const db = new Sequelize(conectionString);

module.exports =db;