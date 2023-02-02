class HeatingPlan {
    withinRange(aNumberRange) {
        return (aNumberRange.low >= this._temperatureRanage.low)
            && (aNumberRange.high <= this._temperatureRanage.high);
    }
}

if (!aPlan.withinRange(aRoom.daysTempRange))
    alerts.push("방 온도가 지정 범위를 벗어났습니다.");
