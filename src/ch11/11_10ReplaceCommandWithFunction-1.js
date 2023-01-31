class ChargeCalculater {
    constructor(customer, usage, provider) {
        this._customer = customer;
        this._usage = usage;
        this._provicer = provider;
    }

    get baseCharge() {
        return this._customer.baseRate * this._usage;
    }

    get charge() {
        return this.baseCharge + this._provicer.connectionCharge;
    }
}

function charge(customer, usage, provider) {
    return new ChargeCalculater(customer, usage, provider).charge;
}


// 호출자
monthCharge = charge(customer, usage, provider);
