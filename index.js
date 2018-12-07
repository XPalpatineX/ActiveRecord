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
User.withCars()

// Создать нового пользователя
let user2 = new User();
user2.pk = 4;
user2.fields = [user2.pk,"Danil","Albertovish",35,"M"];
user2.create();
// Изменить имя пользователю
user2.fields[1] = "Nikita";
user2.update();
// Удалить пользователя
user2.delete();

// Добавить пользователю новую машину
TODO: //не реализовано