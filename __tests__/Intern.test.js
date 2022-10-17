const Intern = require('../classes/Intern');

describe('School info', () => {
  it("School", () => { 
    const school = "school";
    const obj = new Intern("pog", "pog@pog.com", "school");

    expect(obj.getSchool()).toEqual(school);
  })  
});

describe('Role', () => {
  it("Title", () => {
    const obj = new Intern("pog", "pog@pog.com", "school");

    expect(obj.getPos()).toEqual("Intern");
  })  
});