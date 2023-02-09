class Employee {
    constructor(name, type) {
        this.validateType(type);
        this._name = name;
        this._type = type;
    }

    validateType(arg) {
        if (!["engineer", "manager", "salesperson"].includes(arg))
            throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }

    toString() {
        return `${this._name} (${this.type})`;
    }

    get type() { return this._type; }
}

class Engineer extends Employee {
    get type() { return "engineer"; }
}

function createEmployee(name, type) {
    return new Employee(name, type);
}
