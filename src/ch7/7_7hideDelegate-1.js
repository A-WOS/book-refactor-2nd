class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {return this._name;}
    get department() {return this._department;}
    set department(arg) {this._department = arg;}
    get manger() {return this._department.manger;}
}

class Department {
    get changeCode() {return this._chargeCode;}
    set chargeCode(arg) {this._chargeCode = arg;}
    get manger() {return this._manger;}
    set manager(arg) {this._manger = arg;}
}

/* 클라이언트
manger = aPerson.manger;
 */