class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  

// Gets name 
    getName() {
        return this.name
    };
// Gets ID
    getId() {
        return this.id
    };
// Gets Email
    getEmail() {
        return this.email
    };
// Gets Role
    getRole() {
        return 'Employee'
    };
};
  
// Exporting the Employee page 
  module.exports = Employee;