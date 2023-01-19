function isNotEligibleForDisability(anEmployee) {
    return ((anEmployee.seniority < 2)
        || (anEmployee.monthDisabled > 12)
        || (anEmployee.isPartTime));
}

function disablilityAmount(anEmployee) {
    if (isNotEligibleForDisability(anEmployee))
        return 0;
}
