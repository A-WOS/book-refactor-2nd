
class Province {
    constructor(dox) {
        this._name = doc.name;
        this._producers = [];
        this._totalProduction = 0;
        this._demand = doc.default;
        this._price = doc._price;
        doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
    }

    get name() {return this._name;}
    get producers() {return this._producers.slice();}
    get totalProduction() {return this._totalProduction;}
    set totalProduction(arg) {return this._totalProduction = arg;}
    get demand() {return this._demand;}
    set demand(arg) {return this._demand = parseInt(arg);}  // 숫자로 파싱해서 저장
    get price() {return this._price;}
    set price(arg) {return this._price = parseInt(arg);}    // 숫자로 파싱해서 저장

    addProducer(arg) {
        this._producers.push(arg);
        this._totalProduction += arg.production;
    }

    get shortfall() {
        return this._demand - this.totalProduction;
    }

    get profit() {
        return this.demandValue - this.totalProduction;
    }

    get demandValue() {
        return this.satisfiedDemand * this.price;
    }

    get satisfiedDemand() {
        return Math.min(this._demand, this.totalProduction);
    }

    get demandCost() {
        let remainingDemand = this.demand;
        let result = 0;
        this.producers
            .sort((a, b) => a.cost - b.cost)
            .forEach((p) => {
                const contribution = Math.min(remainingDemand, p.production);
                remainingDemand -= contribution;
                result += contribution * p.cost;
            });
        return result;
    }
}

class Producer {
    constructor(aProvince, data) {
        this._province = aProvince;
        this._cost = data.cost;
        this._name = data.name;
        this._production = data.production || 0;
    }
    get name() {return this._name;}
    get cost() {return this._cost;}
    set cost(arg) {return this._parseInt(arg);}

    get production() {return this._production;}
    set production(amountStr) {
        const amount = parseInt(amountStr);
        const newProduction = Number.isNaN(amount) ? 0 : amount;
        this._province.totalProduction += newProduction - this._production;
        this._production = newProduction;
    }
}

function sampleProvinceData() {
    return {
        name: "Asia",
        producers: [
            { name: 'Byzantium', cost: 10, production: 9 },
            { name: 'Attalia', cost: 12, production: 10 },
            { name: 'Sinope', cost: 10, production: 6 },
        ],
        demand: 30,
        price: 20,
    };
}
