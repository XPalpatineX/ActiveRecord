require('dotenv').config();
const mysql = require('mysql');
const util = require('util');
const User = require('./user');
const Car = require('./car');

global.db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

global.db.query = util.promisify(global.db.query);

// Открыть с БД и вывести в консоль сузествующего пользователя с машинами
// User.withCars()

// Создать нового пользователя
let user1 = new User();
// user1.create({
//   firstName: "Nikita",
//   lastName: "Chernyavsky",
//   age: 20,
//   gender: "M"
// })

// Изменить имя пользователю
let user2 = new User();
user2.update(3,user2.fields[1],"Nikita");
// Удалить пользователя

// Добавить пользователю новую машину
