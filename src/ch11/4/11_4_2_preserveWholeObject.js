class Heating {
    xxNEWwithinRange(tempRange) {
        const low = tempRange.low;
        const high = tempRange.high;
        const isWithinRange = (low >= this._temperatureRange.low)
            && (high <= this._temperatureRange.high);
        return isWithinRange;
    }
}

const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.xxNEWwithinRange(tempRange);
if (!isWithinRange)
    alerts.push("방 온도가 지정 범위를 벗어났습니다.");
