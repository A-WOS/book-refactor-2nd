class Employee {
    constructor(name) {};
    get isPrivileged() {};
    assignCar() {};
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

    finishConstruction() {
        if (this.isPrivileged) this.assignCar(); // 모든 서브클래스가 수행한다.
    }
}
