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
        case 'M': return new Person(aRecord.name, "M");
        case 'F': return new Female(aRecord.name);
        default: return new Person(aRecord.name);
    }
}

class Person {
    constructor(name, genderCode) {
        this._name = name;
        this._genderCode = genderCode || "X";
    }
    get name() { return this._name; }
    get genderCode() { return this._genderCode; }

    get isMale() {
        return "M" === this._genderCode;
    }
    // 생략
}

class Female extends Person {

}
