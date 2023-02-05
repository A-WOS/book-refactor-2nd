class Booking {
    constructor(show, date) {
        this._show = show;
        this._date = date;
    }

    get hasTalkback() {
        return (this._premiumDeletegate)
            ? this._premiumDeletegate.hasTalkback
            : this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }

    get basePrice() {
        return (this._premiumDeletegate)
            ? this._premiumDeletegate.basePrice
            : this._privateBasePrice;
    }

    get hasDinner() {
        return (this._premiumDeletegate)
            ? this._premiumDeletegate.hasDinner
            : undefined;
    }

    get _privateBasePrice() {
        let result = this._show.price;
        if (this.isPeakDay)
            result += Math.round(result * 0.15);
        return result;
    }

    _bePremium(extras) {
        this._premiumDeletegate = new PremiumBookingDelegate(this, extras);
    }
}

class PremiumBooking extends Booking {
    constructor(show, date, extras) {
        super(show, date);
        this._extras = extras;
    }
}

class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
        this._host = hostBooking;
        this._extras = extras;
    }

    get basePrice() {
        return Math.round(super._host._privateBasePrice + this._extras.premiumFee);
    }

    get hasTalkback() {
        return this._host.hasOwnProperty('talkback');
    }

    get hasDinner() {
        return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
    }
}

function createBooking(show, date) {
    return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
    let result = new PremiumBooking(show, date, extras);

    result._bePremium(extras);

    return result;
}

const normalBooking = createBooking(show, date);
const premiumBooking = createPremiumBooking(show, date, extras);
