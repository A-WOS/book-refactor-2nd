class Employee extends Party {
    constructor(name) {
        super(name);
    }

    get isPrivileged() {

    }

    assignCar() {

    }

    finishConstruction() {
        if (this.isPrivileged) this.assignCar();
    }
}

class Manager extends Employee {
    constructor(name, grade) {
        super(name);
        this._grade = grade;
        this.finishConstruction();
    }

    get isPrivileged() {
        return this._grade > 4;
    }
}
