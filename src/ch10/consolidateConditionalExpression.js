function disabilityAmount(anEmployee) {
    if (isNotEligibleForDisability(anEmployee)) return 0;
    // 장애 수당 계산
}

function isNotEligibleForDisability(anEmployee) {
    return anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime;
}
