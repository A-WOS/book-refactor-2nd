function payAmount(employee) {
    if (employee.isSeparated) return {amount: 0, reasonCode: "SEP"};

    if (employee.isRetired) return {amount: 0, reasonCode: "RET"};

    // 급여 계산 로직
    lorem.ipsum(dolor.sitAmet);
    consectetur(adipiscing).elit();
    sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
    ut.enim.ad(minim.veniam);
    return someFinalComputation();
}

function adjustedCapital(anInstrument) {
    if (anInstrument.capital <= 0 || anInstrument.interestRate <= 0 || anInstrument.duration <= 0) return 0;

    return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
}
