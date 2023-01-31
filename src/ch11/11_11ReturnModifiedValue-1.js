let totalAscent = 0;
let totalTime = 0;
let totalDistance = 0;
calculateAscent();
totalAscent = calculateTime();
calculateDistance();
const pace = totalTime / 60 / totalDistance;

function calculateAscent() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        const verticalChange = points[i].elevation - points[i - 1].elevation;
        result = (verticalChange > 0) ? verticalChange : 0;
    }

    return result;
}
