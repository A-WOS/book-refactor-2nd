class Order {
    get finalPrice() {
        const basePrice = this.quantity * this.itemPrice;
        let discountLevel;
        discountLevel = this.discountLevel();
        return this.discountedPrice(basePrice, discountLevel);
    }

    get discountLevel() {
        return (this.quantity > 100) ? 2 : 1;
    }

    discountedPrice(basePrice, discountLevel) {
        switch (discountLevel) {
            case 1: return basePrice * 0.95;
            case 2: return basePrice * 0.9;
        }
    }
}
