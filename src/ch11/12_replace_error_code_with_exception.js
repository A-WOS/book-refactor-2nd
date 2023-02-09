function call() {
    let status = 0;
    try {
        status = calculateShippingCosts(orderData);
    } catch (e) {
        throw e;
    }
    if (status < 0) errorList.push({order: orderData, errorCode: status})
}

function localShippingRules(country) {
    const data = countryData.shippingRules[country];
    if (data) return new ShippingRules(data);
    else return -23;
}

function calculateShippingCosts(anOrder) {
    // 관련 없는 코드
    const shippingRules = localShippingRules(anOrder.country);
    if (shippingRules < 0) return shippingRules;
    // 더 관련 없는 코드
}
