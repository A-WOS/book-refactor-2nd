function localShippingRules(country) {
    const data = countryData.shippingRuels[country];
    if (data) return new shippingRuels(data)
    else return -23;
}

function calculateShippingCosts(anOrder) {
    // 생략
    const shippingRules = localShippingRules(anOrder.country);
    if (shippingRules < 0) return shippingRules; // 오류 전파
    // 생략
}

const status = calculateShippingCosts(orderData);
if (status < 0) errorList.push({order: orderData, errorCode: status});
