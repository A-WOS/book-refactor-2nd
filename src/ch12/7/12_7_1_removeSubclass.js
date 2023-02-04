class Person {
    constructor(name, genderCode) {
        this._name = name;
        this._genderCode = genderCode;
    }

    get name() {
        return this._name;
    }

    get gender() {
        return "X";
    }
    get genderCode() {
        return this._genderCode;
    }

    get isMale() {return "M" === this._genderCode;}
    get isFemale() {return "F" === this._genderCode;}
}

function createPerson(aRecord) {
    switch (aRecord.gender) {
        case 'M':
            return new Male(aRecord.name, "M");
        case 'F':
            return new Female(aRecord.name, "F");
        default:
            return new Person(aRecord.name, "X");
    }
}

function loadFromInput(data) {
    return data.map(aRecord => createPerson(aRecord));
}

const numberOfMales = people.filter(p => p.isMale).length;
