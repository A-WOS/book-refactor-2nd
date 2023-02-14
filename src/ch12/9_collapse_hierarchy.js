function call() {
    const employee = new Employee("Employee");
    const salesperson = new Salesperson("Salesperson");
    return [employee.name, salesperson.name]
}

class Employee {
    constructor(name) {
        this._name = name;
    }

    get name() { return this._name; }
}

class Salesperson extends Employee {
    constructor(name) {
        super(name);
    }
}
