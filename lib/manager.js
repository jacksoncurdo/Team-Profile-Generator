const Employee = require('./Employee');
// Setting state 
class Manager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email);

        this.phone = phone;
    }
// Gets and returns office number 
    getOfficeNumber() {
        return this.phone
    };    
// Gets and returns role 
    getRole() {
        return 'Manager'
    };
};

module.exports = Manager;