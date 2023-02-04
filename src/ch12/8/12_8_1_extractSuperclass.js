class Employee {
    constructor(name, id, monthlyCost) {
        this._id = id;
        this._name = name;
        this._monthlyCost = monthlyCost;
    }
    get monthlyCost() { return this._monthlyCost; } // 월간 비용
    get name() { return this._name; } // 이름
    get id() { return this._id; }

    get annualCost() { return this._monthlyCost * 12; } // 연간 비용
}

class Department {
    constructor(name, staff) {
        this._name = name;
        this._staff = staff;
    }
    get staff() { return this._staff.slice(); }
    get name() { return this._name; } // 이름

    get totalMonthlyCost() { // 총 월간 비용
        return this.staff
            .map(e => e.monthlyCost)
            .reduce((sum, cost) => sum + cost);
    }
    get headCount() {
        return this.staff.length;
    }
    get totalAnnualCost() { // 총 연간 비용
        return this.totalMonthlyCost * 12;
    }
}
