class Employee {
    constructor(name, type) {
        this.validateType(type);
        this._name = name;
        this._type = type;
    }

    validateType(arg) {
        if (!["enggineer", "manager", "salesperson"].includes(arg))
            throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }

    get typeString() {
        return this._type.toString();
    }

    get type() {
        return this._type;
    }

    set type(arg) {
        this._type = Employee.createEmployeeType(arg);
    }

    static createEmployeeType(aString) {
        switch (aString) {
            case "engineer": return new Engineer();
            case "manager": return new Manager();
            case "salesperson": return new Salesperson();
            default: throw new Error(`${aString}라는 직원 유형은 없습니다.`);
        }
    }

    get capitalizedName() {
        return this.toString().charAt(0).toUpperCase()
            + this.toString().substr(1).toLowerCase();
    }

    toString() {
        return `${this._name} (${this.capitalizedName})`;
    }
}

class EmployeeType {
    constructor(aString) {
        this._value = aString;
    }

    toString() {
        return this._value
    }
}

class Engineer extends Employee {
    get type() {return "engineer"}
}

class Manager extends Employee {
    get type() {return "manager"}
}

class Salesperson extends Employee {
    get type() {return "salesperson"}
}
