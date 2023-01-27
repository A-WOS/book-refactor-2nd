function calculatePrice() {
    let charge;
    if (summer())
        charge = quantity * plan.summerRate;
    else
        charge = quantity * plan.regularRate + plan.regularServiceCharge;
    return charge;
}

function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}
