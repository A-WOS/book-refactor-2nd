let totalAscent = 0;
let totalTime = 0;
let totalDistance = 0;
totalAscent = calculateAscent();
calculateTime();
calculateDistance();
const pace = totalTime / 60 / totalDistance;

function calculateAscent() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        const verticalCharge = points[i].elevation - points[i - 1].elevation;
        result += (verticalCharge > 0) ? verticalCharge : 0;
    }
    return result;
}
