class CustomerData {
    constructor(data) {
        this._data = data;
    }
}

function getCustomerData() { return customerData;}
function getRawDataOfCustomers() { return customerData._data; }
function setRawDataOfCustomers(arg) { customerData = new CustomerData(arg);}

function setUsage(customerID, year, month, amount) {
    getRawDataOfCustomers()[customerID].usages[year][month] = amount;
}

setUsage(customerID, year, month, amount);

function compareUsage(customerID, laterYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
    return {laterAmount: later, change: later - earlier};
}
