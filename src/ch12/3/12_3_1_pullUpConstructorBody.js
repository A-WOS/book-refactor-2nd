class Party {
    constructor(name) {
        this._name = name;
    }
}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super(name);
        this._id = id;
        this._monthlyCost = monthlyCost;
    }
    // 생략
}

class Departement extends Party {
    constructor(name, staff) {
        super(name);
        this._staff = staff;
    }
    // 생략
}
