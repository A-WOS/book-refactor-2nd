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
    get type() {
        return this._type;
    }

    toString() {
        return `${this._name} (${this.type})`;
    }
}
