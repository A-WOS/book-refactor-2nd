class HeatingPlan {
    get targetTemperature() {
        const selectedTemperature = thermostat.selectedTemperature;
        if (selectedTemperature > this._max) return this._max;
        else if (selectedTemperature > this._min) return this._min;
        else return selectedTemperature;
    }
}



// 호출자
if (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
else setOff();
