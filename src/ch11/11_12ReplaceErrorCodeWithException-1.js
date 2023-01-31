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

let status;
try {
    status = calculateShippingCosts(orderData);
} catch (e) {
    throw e;
}
if (status < 0) errorList.push({order: orderData, errorCode: status});

class OrderProcessingError extends Error {
    constructor(errorCode) {
        super(`주문 처리 오류: ${errorCode}`);
        this.code = errorCode;
    }

    get name() {return "OrderProcessingError";}
}
