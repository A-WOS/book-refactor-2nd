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

    get typeString() { return this._type.toString(); }
    get type() { return this._type; }
    set type(arg) { this._type = Employee.createEmployeeType(arg); }

    toString() {
        return `${this._name} (${this.type.capitalizedType})`;
    }

    static createEmployeeType(aString) {
        switch (aString) {
            case "engineer":    return new Engineer();
            case "manager":     return new Manager();
            case "salesperson": return new Salesperson();
            default:            throw new Error(`${aString}라는 직원 유형은 없습니다.`);
        }
    }
}

class EmployeeType {
    get capitalizedType() {
        return this.toString().charAt(0).toUpperCase() + this.toString().substr(1).toLowerCase();
    }
}

class Engineer extends EmployeeType {
    toString() { return "engineer"; }
}

class Manager extends EmployeeType {
    toString() { return "manager"; }
}

class Salesperson extends EmployeeType {
    toString() { return "salesperson"; }
}
