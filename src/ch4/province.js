function sampleProvinceData() {
    return {
        name: "Asia",
        producers: [
            {name: "Byzantium", cost: 10,   production: 9},
            {name: "Attalia",   cost: 12,   production: 10},
            {name: "Sinope",    cost: 10,   production: 6},
        ],
        demand: 30,
        price: 20
    };
}

class Province {
    constructor(doc) {
        this._name = doc.name;
        this._producers = [];
        this._totalProduction = 0;
        this._demand = doc.demand;
        this._price = doc.price;
        doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
    }

    addProducer(arg) {
        this._producers.push(arg);
        this._totalProduction += arg.totalProduction;
    }

    get name() {return this._name;}
    get producers() {return this._producers.slice();}
    get totalProduction() {return this._totalProduction}
    set totalProduction(arg) {this._totalProduction = arg}
    get demand() {return this._demand;}
    set demand(arg) {this._demand = arg}
    get price() {return this._price;}
    set price(arg) {this._price = arg}
}