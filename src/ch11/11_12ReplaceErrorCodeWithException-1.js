function localShippingRules(country) {
    const data = countryData.shippingRuels[country];
    if (data) return new shippingRuels(data)
    else throw new OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder) {
    // 생략
    const shippingRules = localShippingRules(anOrder.country);
    // 생략
}

let status;
try {
    status = calculateShippingCosts(orderData);
} catch (e) {
    if (e instanceof OrderProcessingError)
        errorList.push({order: orderData, errorCode: e.code});
    else
        throw e;
}

class OrderProcessingError extends Error {
    constructor(errorCode) {
        super(`주문 처리 오류: ${errorCode}`);
        this.code = errorCode;
    }

    get name() {return "OrderProcessingError";}
}
