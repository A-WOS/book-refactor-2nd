class CustomerData {
    constructor(data) {
        this._data = data;
    }

    get rawData() { return _.cloneDeep(this._data); }
    usage(customerID, year, month) {
        return this._data[customerID].usages[year][month];
    }
    setUsage(customerID, year, month, amount) {
        this._data[customerID].usages[year][month] = amount;
    }
}

function getCustomerData() { return customerData;}
getCustomerData().setUsage(customerID, year, month, amount);

function compareUsage(customerID, laterYear, month) {
    const later = getCustomerData().rawData.usage(customerID, laterYear, month);
    const earlier = getCustomerData().rawData.usage(customerID, laterYear - 1, month);
    return {laterAmount: later, change: later - earlier};
}
