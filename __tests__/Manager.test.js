const Manager = require('../classes/Manager');

describe('Office number', () => {
  it("Office number", () => {
    const offNumber = 21;
    const obj = new Manager("pog", "pog@pog.com");

    expect(obj.getOffNumber()).toEqual(offNum);
  })  
});

describe('Role', () => {
  it("Title", () => {
    const obj = new Manager("pog", "pog@pog.com");

    expect(obj.getPos()).toEqual("Manager");
  }) 
});