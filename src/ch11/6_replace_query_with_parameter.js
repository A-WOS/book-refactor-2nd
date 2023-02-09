function call() {
    if (thePlan.targetTemperature(targetTemperature) > thermostat.currentTemperature) setToHeat();
    else if (thePlan.targetTemperature(targetTemperature) < thermostat.currentTemperature) setToCool();
    else setOff();
}

class HeatingPlan {
    targetTemperature(selectedTemperature) {
        if (selectedTemperature > this._max) return this._max;
        else if (selectedTemperature < this._min) return this._min;
        else return selectedTemperature;
    }
}
