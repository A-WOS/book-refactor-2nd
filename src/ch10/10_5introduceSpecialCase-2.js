class Site {
    get customer() {
        return (this._customer === "미확인 고객") ? createUnknownCustomer() : this._customer;
    }
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
        name: "거주자",
        billingPlan: registry.billingPlans.basic,
        paymentHistory: {
            weekDelinquentInLastYear: 0,
        }
    };
}

function isUnknown(arg) {
    return arg.isUnKnown;
}

// 클라이언트1
const aCustomer = site.customer;
const customerName = aCustomer.name;

// 클라이언트2
const Plan = aCustomer.billingPlan;

// 클라이언트3
const weekDelinquent =  aCustomer.paymentHistory.weekDelinquentInLastYear;
