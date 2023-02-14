function call() {
    const numberOfMales = people.filter(p => p instanceof Male).length;
}

function createPerson(name) {
    return new Person(name);
}

function createMale(name) {
    return new Male(name);
}

function createFemale(name) {
    return new Female(name);
}

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
