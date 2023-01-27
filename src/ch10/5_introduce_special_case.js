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
}

function isUnknown(arg) {
    if (!(arg instanceof Customer) || (arg instanceof UnknownCustomer))
        throw new Error(`잘못된 값과 비교: <${arg}>`);
    return arg.isUnknown;
}

function client1Code() {
    const aCustomer = site.customer;
    let customerName = aCustomer.name;
}

function client2Code(aCustomer, registry) {
    const plan = (isUnknown(aCustomer)) ?
        registry.billingPlans.basic
        : aCustomer.billingPlan;
}

function client3Code(aCustomer, newPlan) {
    if (isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;
}

function client4Code() {
    const weeksDelinquent = isUnknown(aCustomer) ?
        0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}


