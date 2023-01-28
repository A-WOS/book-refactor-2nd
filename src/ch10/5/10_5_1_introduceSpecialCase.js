class Site {
    get customer() {
        return (this._customer === "미확인 고객") ? new UnknownCustomer() : this._customer;
    }
}

class Customer {
    get name() {
        return this._name;
    } // 고객 이름
    get billingPlan() {
        return this._billingPlan;
    } // 요금제
    set billingPlan(arg) {
        return this._billingPlan = arg;
    }

    get paymentHistory() {
        return this._paymentHistory;
    } // 납부 이력
    get isUnknown() {
        return false;
    }
}

class UnknownCustomer {
    get isUnknown() {
        return this.true;
    }

    get name() {
        return "거주자";
    }

    get billingPlan() {
        return registry.billingPlans.basic;
    }

    set billingPlan(arg) { /* 무시한다. */
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
    if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
        throw new Error(`잘못된 값과 비교: <${arg}>`);
    return arg.isUnknown;
}

function client1Code() {
    const customerName = aCustomer.name;

}

function client2Code(aCustomer, registry) {
    const plan = aCustomer.billingPlan;
}

function client3Code(aCustomer, newPlan) {
    aCustomer.billingPlan = newPlan;
}

function client4Code() {
    const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
