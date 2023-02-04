class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    get gender() {
        return "X";
    }
}

class Male extends Person {
    get genderCode() {
        return "M";
    }
}

class Female extends Person {
    get genderCode() {
        return "F";
    }
}

function createPerson(aRecord) {
    switch (aRecord.gender) {
        case 'M':
            return new Male(aRecord.name);
        case 'F':
            return new Female(aRecord.name);
        default:
            return new Person(aRecord.name);
    }
}

function loadFromInput(data) {
    const result = [];
    data.forEach(aRecord => {
        result.push(createPerson(aRecord));
    });
    return result;
}

const numberOfMales = people.filter(p => p instanceof Male).length;
