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

function isUnknown(arg) {
    if (!((arg instanceof Customer) || (arg instanceof UnKnownCustomer)))
        throw new Error(`잘못된 값과 비교: <${arg}>`);
    return arg.isUnknown;
}

class UnKnownCustomer {
    get name() {return "거주자";}
    get isUnknown() {return true;}
}

// 클라이언트1
const aCustomer = site.customer;
const customerName = aCustomer.name;

// 클라이언트2
const Plan = (isUnknown(aCustomer)) ?
    registry.billingPlans.basic
    : aCustomer.billingPlan;

// 클라이언트3
if (!isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;

// 클라이언트4
const weekDelinquent =  isUnknown(aCustomer) ?
    0
    : aCustomer.paymentHistory.weekDelinquentInLastYear;
