class Customer {
    applyDiscount(aNumber) {
        return aNumber - (this._discountRate * aNumber);
    }

    set discountRate(aNumber) {
        assert(null === aNumber || aNumber >= 0);
        this._discountRate = aNumber;
    }
}
