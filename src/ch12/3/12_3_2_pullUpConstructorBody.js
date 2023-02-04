class Employee {
    constructor(name) {};
    get isPrivileged() {};
    assignCar() {};
    finishConstruction() {
        if (this.isPrivileged) this.assignCar(); // 모든 서브클래스가 수행한다.
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
