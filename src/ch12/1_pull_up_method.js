function call() {
    const employee = new Employee();
    console.log(employee.annualCost);
    const department = new Department();
    console.log(department.totalAnnualCost);
}

class Employee extends Party {
    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class Department extends Party {
    get totalAnnualCost() {
        return this.monthlyCost * 12;
    }
}

class Party {

}
