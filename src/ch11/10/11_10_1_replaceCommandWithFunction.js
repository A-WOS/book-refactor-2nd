class ChargeCalculator {
    constructor(customer, usage, provider) {
        this._customer = customer;
        this._usage = usage;
        this._provider = provider;
    }
    get charge() {
        const baseCharge = this._customer.baseRate * this._usage;
        return baseCharge + this._provider.connectionCharge;
    }
}

function charge(customer, usage, provider) {
    return new ChargeCalculator(customer, usage, provider).charge();
}

monthCharge = charge(customer, usage, provider);
