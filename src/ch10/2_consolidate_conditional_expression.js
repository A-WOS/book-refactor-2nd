function disabilityAmount(anEmployee) {
    if (isNotEligibleForDisability()) return 0;

    if (anEmployee.onVacation)
        if (anEmployee.seniority > 10)
            return 1;

    return 0.5;

    function isNotEligibleForDisability() {
        return (anEmployee.seniority < 2)
            || (anEmployee.monthsDisabled < 12)
            || (anEmployee.isPartTime);
    }
}
