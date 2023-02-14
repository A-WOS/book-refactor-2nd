function call() {
    const numberOfMales = people.filter(p => p.isMale).length;
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

function loadFromInput(data) {
    return data.map(aRecord => createPerson(aRecord));
}

function createPerson(aRecord) {
    switch (aRecord.gender) {
        case 'M': return new Male(aRecord.name);
        case 'F': return new Female(aRecord.name);
        default: return new Person(aRecord.name);
    }
}

class Person {
    constructor(name) {
        this._name = name;
    }
    get name() { return this._name; }
    get genderCode() { return "X"; }

    get isMale() {
        return this instanceof Male;
    }
    // 생략
}

class Male extends Person {

}

class Female extends Person {

}
