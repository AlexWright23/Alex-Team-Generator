const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    (name, email, id, 'intern')
    this.school = school
  }

  getPosition() {
    return "Intern"
  }

  getSchool() {
    return this.school
  }
}

module.exports = Intern