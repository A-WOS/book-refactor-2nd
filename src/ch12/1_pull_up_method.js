function call() {
    const employee = new Employee();
    console.log(employee.annualCost);
    const department = new Department();
    console.log(department.annualCost);
}

class Employee extends Party { }

class Department extends Party { }

class Party {
    get annualCost() {
        return this.monthlyCost * 12;
    }
}
