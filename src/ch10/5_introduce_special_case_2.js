class Site {
    get customer() {
        return (this._customer === "미확인 고객") ? createUnknownCustomer() : this._customer;
    }
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

function isUnknown(arg) {
    return arg.isUnknown;
}

function client1Code() {
    const aCustomer = site.customer;
    let customer;
    if (isUnknown(aCustomer)) customerName = "거주자";
    else customerName = aCustomer.name;
}

function client2Code() {
    const plan = isUnknown(aCustomer) ?
        registry.billingPlans.basic
        : aCustomer.billingPlan;
}

function client3Code() {
    const weeksDelinquent = isUnknown(aCustomer) ?
        0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
