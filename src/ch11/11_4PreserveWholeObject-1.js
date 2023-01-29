class HeatingPlan {
    withinRange(bottom, top) {
        return (bottom >= this._temperatureRange.low) && (top >= this._temperatureRange.high)
    }

    xxNEWwithinRange(aNumberRange) {
        return this.withinRange(aNumberRange.low, aNumberRange.high)
    }
}

// 호출자
if (!aPlan.xxNEWwithinRange(aRoom.daysTempRange))
    alerts.push("방 온도가 지정 범위를 벗어났습니다.");
