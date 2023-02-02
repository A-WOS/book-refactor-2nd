class Employee {
    constructor(name, type) {
        this.validateType(type);
        this._name = name;
        this._type = type;
    }

    vaildateType(arg) {
        if (!["enggineer", "manager", "salesperson"].includes(arg))
            throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
    toString() {
        return `${this._name} (${this._type})`;
    }
}
