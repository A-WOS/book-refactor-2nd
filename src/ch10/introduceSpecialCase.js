class Site {
    get customer() {
        return (this._customer === "미확인 고객") ? new UnknownCustomer() : this._customer;
    }
}

class Customer {
    get name() {
        return this._name;
    }

    get billingPlan() {
        return this._billingPlan;
    }

    set billingPlan(arg) {
        this._billingPlan = arg;
    }

    get paymentHistory() {
        return this._paymentHistory;
    }

    get isUnknown() {
        return false;
    }
}

class UnknownCustomer {
    get isUnknown() {
        return true;
    }

    get name() {
        return "거주자";
    }

    get billingPlan() {
        return registry.billingPlans.basic;
    }

    set billingPlan(arg) {
    }

    get paymentHistory() {
        return new NullPaymentHistory();
    }
}

class NullPaymentHistory {
    get weeksDelinquentInLastYear() {
        return 0;
    }
}

function isUnknown(arg) {
    if (!((arg instanceof Customer) || (arg instanceof UnknownCustomer)))
        throw new Error(`잘못된 값과 비교: <${arg}>`);
    return arg.isUnknown;
}

// 클라이언트 1
const aCustomer = site.customer;
// ... 수 많은 코드 ...
const customerName = aCustomer.name;

// 클라이언트 2
const plan = aCustomer.billingPlan;

// 클라이언트 3
if (aCustomer !== "미확인 고객") aCustomer.billingPlan = newPlan;

// 클라이언트 4
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;

