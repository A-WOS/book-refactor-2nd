class Party {
    constructor(name) {
        this._name = name;
    }
    get name() { return this._name; } // 이름
}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super(name);
        this._id = id;
        this._monthlyCost = monthlyCost;
    }
    get monthlyCost() { return this._monthlyCost; } // 월간 비용
    get id() { return this._id; }
    get annualCost() { return this._monthlyCost * 12; } // 연간 비용
}

class Department extends Party {
    constructor(name, staff) {
        super(name);
        this._staff = staff;
    }
    get staff() { return this._staff.slice(); }
    get monthlyCost() { // 총 월간 비용
        return this.staff
            .map(e => e.monthlyCost)
            .reduce((sum, cost) => sum + cost);
    }
    get headCount() {
        return this.staff.length;
    }
    get totalAnnualCost() { // 총 연간 비용
        return this.monthlyCost * 12;
    }
}
