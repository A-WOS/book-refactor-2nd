class Site {
    get customer() {return this._customer;}
}

class Customer {
    get name() {/**/}
    get billingPlan() {/**/}
    set billingPlan(arg) {/**/}
    get paymentHistory() {/**/}
    get isUnknown() {return false;}
}

function createUnknownCustomer() {
    return {
        isUnknown: true,
    };
}

function client1Code() {
    const aCustomer = site.customer;
    let customer;
    if (aCustomer === "미확인 고객") customerName = "거주자";
    else customerName = aCustomer.name;
}

function client2Code() {
    const plan = (aCustomer === "미확인 고객") ?
        registry.billingPlans.basic
        : aCustomer.billingPlan;
}

function client3Code() {
    const weeksDelinquent = (aCustomer === "미확인 고객") ?
        0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
