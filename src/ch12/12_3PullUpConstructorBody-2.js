class Employee {
    constructor(name) {}
    get isPrivileged() {}
    assingCar() {}
}

class Manager extends Employee {
    constructor(name, grade) {
        super(name);
        this._grade = grade;
        if (this.isPrivileged) this.assingCar();
    }

    get isPrivileged() {
        return this._grade > 4;
    }
}
