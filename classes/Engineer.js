const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, user) {
    (name, email, id, 'engineer')
    this.user = user
  }

  getPosition() {
    return "Engineer"
}

  getUser() {
    return this.user
  }
}

module.exports = Engineer