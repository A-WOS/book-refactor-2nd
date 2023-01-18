let _repositoryData;

export function initialize() {
    _repositoryData = {};
    _repositoryData.customers = new Map();
}

export function registerCustomer(id) {
    if (! _repositoryData.customers.has(id))
        _repositoryData.customers.set(id, new Customer(id));
    return findCustomer(id);
}

export function findCustomer(id) {
    return _repositoryData.customers.get(id);
}

export class Order {
    constructor(data) {
        this._number = data.number;
        this._customer = new Customer(data.customer);
    }

    get customer() {return this._customer;}
    get number() {return this._number;} //예제에는 없음
}

class Customer {
    constructor(id) {
        this._id = id;
    }

    get id() {return this._id;}
}
