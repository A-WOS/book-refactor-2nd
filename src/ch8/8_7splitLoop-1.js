function youngestAge() {
    return Math.min(people.map(p => p.age));
}

function totalSalary() {
    let totalSalary = 0;
    for (const p of people) {
        totalSalary += p.salary;
    }
    return totalSalary;
}

function youngestSalary() {
    return `최연소: ${(youngestAge())}, 총 급여: ${(totalSalary())}`;
}