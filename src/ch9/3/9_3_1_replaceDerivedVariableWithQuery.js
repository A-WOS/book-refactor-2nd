class ProductionPlan {
    get production() {
        return this.calculatedProduction;
    }
    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }

    get calculatedProduction() {
        return this._adjustments
            .reduce((sum, a) => sum + a.amount, 0)
    }
}
