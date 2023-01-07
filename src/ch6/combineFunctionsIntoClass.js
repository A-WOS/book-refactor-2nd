export class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get customer() {
        return this._customer;
    }

    get quantity() {
        return this._quantity;
    }

    get month() {
        return this._month;
    }

    get year() {
        return this._year;
    }

    get baseCharge() {
        return baseRate(this.month, this.year) * this.quantity;
    }
}

function baseRate(month, year) {
    if (year === 2017 && month === 5) return 0.1;

    return 0.2;
}
