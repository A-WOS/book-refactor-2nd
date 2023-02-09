const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.withinRange(tempRange);
if (!isWithinRange)
    alerts.push("방 온도가 지정 범위를 벗어났습니다.");

class HeatingRoom {
    withinRange(tempRange) {
        const low = tempRange.low;
        const high = tempRange.high;
        return (low >= this._temperatureRange.low)
            && (high <= this._temperatureRange.high);
    }
}
