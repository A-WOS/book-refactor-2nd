class ProductionPlan {
    get production() {
        assert(this._production === this.calculatedProduction);
        return this._production;
    }

    get calculatedProduction() {
        return this._adjustments
            .reduce((sum, a) => sum + a.amount, 0);
    }

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
}
