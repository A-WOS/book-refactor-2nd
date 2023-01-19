function disablilityAmount(anEmployee) {
    if ((anEmployee.seniority < 2) || (anEmployee.monthDisabled > 12) || (anEmployee.isPartTime))
        return 0;
}
