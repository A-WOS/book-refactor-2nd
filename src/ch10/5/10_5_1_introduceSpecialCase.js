class Site {
    get customer() { return this._customer; }
}

class Customer {
    get name() { return this._name; } // 고객 이름
    get billingPlan() { return this._billingPlan;} // 요금제
    set billingPlan(arg) { return this._billingPlan = arg; }
    get paymentHistory() { return this._paymentHistory; } // 납부 이력
    get isUnknown() { return false; }
}

class UnknownCustomer {
    get isUnknown() { return this.true; }
}

function client1Code() {
    const aCustomer = site.customer;
    let customerName;
    if (aCustomer === "미확인 고객") customerName = "거주자";
    else customerName = aCustomer.name;
}

function client2Code(aCustomer, registry) {
    const plan = (aCustomer === "미확인 고객") ?
        registry.billingPlans.basic
        : aCustomer.billingPlan;
}

function client3Code(aCustomer, newPlan) {
    if (aCustomer != "미확인 고객") aCustomer.billingPlan = newPlan;
}

function client4Code() {
    const weeksDelinquent = (aCustomer === "미확인 고객") ?
        0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
