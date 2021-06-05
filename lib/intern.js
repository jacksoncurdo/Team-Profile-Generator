const Employee = require('./Employee');

// Setting state 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school
    }
// Gets and returns school
    getSchool() {
        return this.school
    }

// Gets and returns role
    getRole() {
        return 'Intern'
    }
};

module.exports = Intern