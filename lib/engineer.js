const Employee = require('./Employee');

// Setting state 
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {    
        super(name, id, email);

        this.gitHub = gitHub
    }
// Gets and returns Github
    getGitHub() {
        return this.gitHub
    }
// Gets and returns role
    getRole() {
        return 'Engineer'
    };
};

module.exports = Engineer