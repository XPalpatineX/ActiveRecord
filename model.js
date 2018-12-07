class Model {
  static withCars() {
    global.db.query(`Select u.first_name, u.last_name, c.model from cars c,users u where u.id = c.user_id`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  loadAll() {
    global.db.query(`Select * from ${this.constructor.table()} where id = ${this.pk}`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  load(field) {
    global.db.query(`Select ${field} from ${this.constructor.table()} where id = ${this.pk}`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  create() {
    global.db.query(`INSERT INTO ${this.constructor.table()} (id,first_name,last_name,age,gender) VALUES (${this.fields[0]},"${this.fields[1]}","${this.fields[2]}","${this.fields[3]}","${this.fields[4]}")`)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err))
  }

  update() {
    global.db.query(`UPDATE ${this.constructor.table()} SET first_name = "${this.fields[1]}", last_name = "${this.fields[2]}", age = "${this.fields[3]}", gender = "${this.fields[4]}" WHERE id = ${this.pk}`)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err))
  }

  delete() {
    global.db.query(`DELETE FROM ${this.constructor.table()} WHERE id = ${this.pk}`)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err))
  }
}


module.exports = Model;
