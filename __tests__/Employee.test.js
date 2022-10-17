const Employee = require("../classes/Employee");
describe('Name', () => {
    it("Name", () => {
      const text = 'Pogchamp';
      const val = new Employee(text);

      expect(val.name).toEqual(text);
    })    
});
describe('ID', () => {
    it("ID", () => {
      const text = 0;
      const val = new Employee(text,);

      expect(val.id).toEqual(text);
    })
});
describe('Email', () => {
    it("Email", () => {
      const text = "pog@pog.com";
      const val = new Employee(text, "pog@pog.com");

      expect(val.email).toEqual(text);
    }) 
});
describe('Title', () => {
    it("Title", () => {
      const text = "title";
      const val = new Employee(text, "pog@pog.com", "title");

      expect(val.title).toEqual(text);
    })   
});