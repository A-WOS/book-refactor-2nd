class CustomerData {
    constructor(data) {
        this._data = data;
    }

    get rawData() { return _.cloneDeep(this._data); }
    setUsage(customerID, year, month, amount) {
        this._data[customerID].usages[year][month] = amount;
    }
}

function getCustomerData() { return customerData;}
function getRawDataOfCustomers() { return customerData.rawData; }
function setRawDataOfCustomers(arg) { customerData = new CustomerData(arg);}

getCustomerData().setUsage(customerID, year, month, amount);

function compareUsage(customerID, laterYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
    return {laterAmount: later, change: later - earlier};
}
