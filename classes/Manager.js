const Employee = require('./Employee')

class Manager extends Employee {
  constructor(name, id, email, offNumber) {
    (name, email, id, 'Manager')
    this.offNumber = offNumber
  }

  getPosition() {
    return "Manager"
  }

  getOffNum() {
    return this.offNumber
  }
}

module.exports = Manager;