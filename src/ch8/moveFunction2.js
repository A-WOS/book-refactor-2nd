class Account {
    get bankCharges() {
        let result = 4.5;

        if (this._daysOverdrawn > 0)
            result += this.overdraftCharge * 0.1;

        return result;
    }

    get overdraftCharge() {
        return this.type.overdraftCharge(this.daysOverdrawn);
    }
}

class AccountType {
    overdraftCharge(daysOverdrawn) {
        if (this.isPremium) {
            const baseCharge = 10;

            if (daysOverdrawn <= 7)
                return baseCharge;
            else
                return baseCharge + (daysOverdrawn - 7) * 0.85;
        } else
            return daysOverdrawn * 1.75;
    }
}
