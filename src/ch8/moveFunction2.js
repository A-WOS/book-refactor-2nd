class Account {
    get bankCharges() {
        let result = 4.5;

        if (this._daysOverdrawn > 0)
            result += this.overdraftCharge * 0.1;

        return result;
    }

    get overdraftCharge() {
        if (this.type.isPremium) {
            const baseCharge = 10;

            if (this.daysOverdrawn <= 7)
                return baseCharge;
            else
                return baseCharge + (this.daysOverdrawn - 7) * 0.85;
        } else
            return this.daysOverdrawn * 1.75;
    }
}
