function disabilityAmount(anEmployee) {

    // 장애 수단 계산
    if (isNotEligibleForDisability()) return 0;

    function isNotEligibleForDisability(){ // 장애 수당 적용 여부 확인
        return ((anEmployee.seniority < 2)
        || (anEmployee.monthsDisabled > 12)
        || (anEmployee.isPartTime));
    }

    if ((anEmployee.onVacation)
        && (anEmployee.seniority > 10)) return 1;
    return 0.5;
}
