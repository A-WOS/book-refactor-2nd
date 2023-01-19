class Site {
    get customer() {return this._customer;}
}

class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {return false;}
}

function createUnknownCustomer() {
    return {
        isUnKnown: true,
    };
}

// 클라이언트1
const aCustomer = site.customer;
let customerName;
if (aCustomer === "미확인 고객") customerName = "거주자";
else customerName = aCustomer.name;

// 클라이언트2
const Plan = (aCustomer === "미확인 고객") ?
    registry.billingPlans.basic
    : aCustomer.billingPlan;

// 클라이언트3
const weekDelinquent =  (aCustomer === "미확인 고객") ?
    0
    : aCustomer.paymentHistory.weekDelinquentInLastYear;
