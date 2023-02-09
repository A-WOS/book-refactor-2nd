class Employee extends Party {
    constructor(name) {
        super(name);
    }

    get isPrivileged() {

    }

    assignCar() {

    }
}

class Manager extends Employee {
    constructor(name, grade) {
        super(name);
        this._grade = grade;
        this.finishConstruction();
    }

    finishConstruction() {
        if (this.isPrivileged) this.assignCar();
    }

    get isPrivileged() {
        return this._grade > 4;
    }
}
