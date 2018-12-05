class Model {
  static withCars() {
    global.db.query(`Select u.first_name, u.last_name, c.model from cars c,users u where u.id = c.user_id`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  loadAll(id = 0) {
    global.db.query(`Select * from ${this.constructor.table()} where id = ${id}`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  load(id, field) {
    global.db.query(`Select ${field} from ${this.constructor.table()} where id = ${id}`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  create(info) {
    if (isEmpty(info)) return false

    global.db.query(`INSERT INTO ${this.constructor.table()} (first_name,last_name,age,gender) VALUES ("${info.firstName}","${info.lastName}","${info.age}","${info.gender}")`)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err))
  }

  update(id,field,value) {
    global.db.query(`UPDATE ${this.constructor.table()} SET ${field} = "${value}" WHERE id = ${id}`)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err))
  }
}

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}


module.exports = Model;
