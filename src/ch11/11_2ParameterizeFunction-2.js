function baseCharge(usage) {
    if (usage < 0) return usd(0);
    const amount =
        bottomBand(usage) * 0.03
        + withBand(usage, 100, 200) * 0.15
        + topBand(usage) * 0.07;
    return usd(amount);
}

function bottomBand(usage) {
    return Math.min(usage, 100);
}

function withBand(usage, bottom, top) {
    return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

function topBand(usage) {
    return usage > 200 ? usage - 200 : 0;
}
