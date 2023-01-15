function youngestAge() {
    return Math.min(people.map(p => p.age));
}

function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
}

function youngestSalary() {
    return `최연소: ${(youngestAge())}, 총 급여: ${(totalSalary())}`;
}
