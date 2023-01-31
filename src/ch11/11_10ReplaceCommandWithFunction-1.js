class ChargeCalculater {
    constructor(customer, usage, provider) {
        this._customer = customer;
        this._usage = usage;
        this._provicer = provider;
    }

    charge(customer, usage, provider) {
        const baseCharge = customer.baseRate * usage;
        return baseCharge + provider.connectionCharge;
    }
}

function charge(customer, usage, provider) {
    return new ChargeCalculater(customer, usage, provider).charge(customer, usage, provider);
}


// 호출자
monthCharge = charge(customer, usage, provider);
