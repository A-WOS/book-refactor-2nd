class CustomerData {
    constructor(data) {
        this._data = data;
    }

    setUsage(customerID, year, month, amount) {
        this._data[customerID].usages[year][month] = amount;
    }

    get rawData() {
        return _.cloneDeep(this._data);
    }
}

function getCustomerData() {return customerData;}
function getRawDataOfCustomers() {return customerData.rawData;}
function setRawDataOfCustomers(arg) {customerData = new CustomerData(arg);}

getCustomerData().setUsage(customerID, year, month, amount);

function compareUsage(customerID, laterYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier = getRawDataOfCustomers()[cutmoerID].usages[laterYear - 1][month];
    return {laterAmonut: later, change: later - earlier};
}

