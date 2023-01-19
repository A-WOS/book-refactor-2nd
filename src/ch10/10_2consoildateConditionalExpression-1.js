function disablilityAmount(anEmployee) {
    if (anEmployee.seniority < 2) return 0;
    if (anEmployee.monthDisabled > 12) return 0;
    if (anEmployee.isPartTime) return 0;
}
