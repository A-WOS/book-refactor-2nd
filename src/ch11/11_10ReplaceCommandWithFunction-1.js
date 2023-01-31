class ChargeCalculater {
    charge(customer, usage, provider) {
        const baseCharge = customer.baseRate * usage;
        return baseCharge + provider.connectionCharge;
    }
}

function charge(customer, usage, provider) {
    return new ChargeCalculater().charge(customer, usage, provider);
}


// 호출자
monthCharge = charge(customer, usage, provider);
