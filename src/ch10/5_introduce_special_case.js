class Site {
    get customer() {
        return (this._customer === "미확인 고객") ? new UnknownCustomer() : this._customer;
    }
}

class Customer {
    get name() {
        // 고객 이름
    }
    get billingPlan() {
        // 요금제
    }
    set billingPlan(arg) {
        // 요금제
    }
    get paymentHistory() {
        // 납부 이력
    }
    get isUnknown() {return false;}
}

class UnknownCustomer {
    get isUnknown() {return true;}
    get name() {return "거주자";}
    get billingPlan() {return registry.billingPlans.basic;}
    set billingPlan(arg) { /* 무시한다 */ }
    get paymentHistory() {return new NullPaymentHistory();}
}

class NullPaymentHistory {
    get weeksDelinquentInLastYear() {return 0;}
}

function client1Code() {
    const aCustomer = site.customer;
    let customerName = aCustomer.name;
}

function client2Code(aCustomer) {
    const plan = aCustomer.billingPlan;
}

function client3Code(aCustomer, newPlan) {
    aCustomer.billingPlan = newPlan;
}

function client4Code() {
    const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}

function weirdClientCode(aCustomer) {
    const name = aCustomer.isUnknown ? "미확인 거주자" : aCustomer.name;
}
