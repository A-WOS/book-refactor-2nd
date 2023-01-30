class Employee {
    constructor(name, typeCode) {
        this._name = name;
        this._typeCode = typeCode;
    }

    get name() {return this._name;}
    get type() {
        return Employee.legalTypeCodes[this._typeCode];
    }

    static get legalTypeCode() {
        return {"E" : "Engineer", "M" : "Manager", "S" : "Salesperson"};
    }
}

function createEmployee(name, typeCode) {
    return new Employee(name, typeCode);
}

// 호출자
candidate = createEmployee(document.name, document.empType);
const leadEngineer = createEmployee(document.leadEngineer, 'E');
