const Engineer = require('../classes/Engineer');

describe('Username', () => {
    it("Username", () => {
      const user = "user"
      const obj = new Engineer("pog", "pog@pog.com", user);
      
      expect(obj.getUser()).toEqual(user);
    }) 
});

describe('Position', () => {
    it("Title", () => {
      const user = "user"
      const obj = new Engineer("pog", "pog@pog.com", user);
      
      expect(obj.getPos()).toEqual("Engineer");
    })
});