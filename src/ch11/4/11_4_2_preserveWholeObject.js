const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
const isWithinRange = aPlan.withinRange(low, high);

if (!isWithinRange)
    alerts.push("방 온도가 지정 범위를 벗어났습니다.");
