manager = aPerson.manager;

class Person {
    get manager() {return this._department.manager;}
    get department() {return this._department;}
}

class Department {
    get manager() {return this._manger;}
}

