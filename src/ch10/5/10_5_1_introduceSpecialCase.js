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