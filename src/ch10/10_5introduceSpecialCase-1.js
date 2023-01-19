class Site {
    get customer() {
        return (this._customer === "미확인 고객") ? new UnKnownCustomer() : this._customer;
    }
}

class Customer {
    get name() {return "거주자";}
    get billingPlan() {return this._billingPlan;}
    set billingPlan(arg) {this._billingPlan = arg;}
    get paymentHistory() {return this._payMentHistory;}
    get isUnknown() {return false;}
}

class UnKnownCustomer {
    get name() {return "거주자";}
    get billingPlan() {return registry.billingPlans.basic;}
    set billingPlan(arg) {}
    get isUnknown() {return true;}
    get paymentHistory() {return new NullPaymentHistory();}
}

class NullPaymentHistory {
    get weekDelinquentInLastYear() {return 0;}
}

// 클라이언트1
const aCustomer = site.customer;
const customerName = aCustomer.name;

// 클라이언트2
const Plan = aCustomer.isUnknown ?
    registry.billingPlans.basic
    : aCustomer.billingPlan;

// 클라이언트3
if (!aCustomer.isUnknown) aCustomer.billingPlan = newPlan;

// 클라이언트4
const weekDelinquent = aCustomer.paymentHistory.weekDelinquentInLastYear;

// 튀는 클라이언트
const name = aCustomer.isUnknown ? "미확인 거주자" : aCustomer.name;
