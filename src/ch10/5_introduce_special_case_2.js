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
        name: "거주자",
        billingPlan: registry.billingPlans.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0,
        },
    };
}

function isUnknown(arg) {
    return arg.isUnknown;
}

function client1Code() {
    const aCustomer = site.customer;
    const customerName = aCustomer.name;
}

function client2Code() {
    const plan = aCustomer.billingPlan;
}

function client3Code() {
    const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
