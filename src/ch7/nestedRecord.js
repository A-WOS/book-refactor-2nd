function getRawDataOfCustomers() { return customerData; }
function setRawDataOfCustomers(arg) { customerData = arg;}

getRawDataOfCustomers()[customerID].usages[year][month] = amount; // 쓰기 예

function compareUsage(customerID, laterYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
    return {laterAmount: later, change: later - earlier};
}