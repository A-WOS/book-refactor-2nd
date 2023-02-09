function call() {
    const employee = new Employee();
    console.log(employee.annualCost);
    const department = new Department();
    console.log(department.annualCost);
}

class Employee extends Party {
    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class Department extends Party {
    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class Party {

}
