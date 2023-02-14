class Person {
    constructor(name) {
        this._name = name;
    }
    get name() { return this._name; }
    get genderCode() { return "X"; }

    // 생략
}

class Male extends Person {

}

class Female extends Person {

}
