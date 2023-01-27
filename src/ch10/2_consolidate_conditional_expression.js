function disabilityAmount(anEmployee) {
    if (isNotEligibleForDisability()) return 0;

    if (isFullyEligibleForDisability()) return 1;

    return 0.5;

    function isNotEligibleForDisability() {
        return (anEmployee.seniority < 2)
            || (anEmployee.monthsDisabled < 12)
            || (anEmployee.isPartTime);
    }

    function isFullyEligibleForDisability() {
        return (anEmployee.onVacation)
            && (anEmployee.seniority > 10);
    }
}
