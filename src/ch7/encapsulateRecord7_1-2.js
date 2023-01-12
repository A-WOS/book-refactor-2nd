customerData[customerID].usages[year][month] = amount;

function compareUsage(customerID), laterYear, month) {
    const later = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[cutmoerID].usages[laterYear - 1][month];
    return {laterAmonut: later, change: later - earlier};
}