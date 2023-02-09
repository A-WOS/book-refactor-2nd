class Employee { }

class Engineer extends Employee { }
class Salesperson extends Employee {
    constructor(quota) {
        super();
        this.quota = quota;
    }
}
