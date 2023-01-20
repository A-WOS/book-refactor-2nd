class Customer {
    set applyDiscount(aNumber) {
        if (!this.discountRate) return aNumber;
        else {
            assert(null === aNumber || this.discountRate >= 0);
            return aNumber - (this.discountRate * aNumber);
        }
    }
}
