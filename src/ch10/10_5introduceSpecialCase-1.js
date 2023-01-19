class Site {
    get customer() {return this._customer;}
}

class Customer {
    get name() {return this._name;}
    get billingPlan() {return this._billingPlan;}
    set billingPlan(arg) {this._billingPlan = arg;}
    get paymentHistory() {return this._payMentHistory;}
}

// 클라이언트1
const aCustomer = site.customer;
let customerName;
if (aCustomer === "미확인 고객") customerName = "거주자";
else customerName = aCustomerName;

// 클라이언트2
const Plan = (aCustomer === "미확인 고객") ?
    registry.billingPlans.basic
    : aCustomer.billingPlan;

// 클라이언트3
if (aCustomer !== "미확인 고객") aCustomer.billingPlan = newPlan;

// 클라이언트4
const weekDelinquent =  (aCustomer === "미확인 고객") ?
    0
    : aCustomer.paymentHistory.weekDelinquentInLastYear;
