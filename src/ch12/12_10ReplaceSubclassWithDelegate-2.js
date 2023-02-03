function createBird(data) {
    switch (data.type) {
        case '노르웨이 파랑 앵무':
            return new NorwegianBlueParrot(data);
        default:
            return new Bird(data);
    }
}

class Bird {
    constructor(data) {
        this._name = data.name;
        this._plumage = data.plumage;
        this._speciesDelegate = this.selectSpeciesDelegate(data)
    }

    selectSpeciesDelegate(data) {
        switch (data.type) {
            case '유럽 제비':
                return new EuropeanSwallowDelegate();
            case '아프리카 제비':
                return new AfricanSwallowDelegate(data);
            case '노르웨이 파랑 앵무':
                return new NorwegianBlueParrotDelegate(data);
            default:
                return null;
        }
    }

    get name() {
        return this._name;
    }

    get plumage() {
        return this._plumage || "보통이다";
    }

    get airSpeedVelocity() {
        return this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity() : null;
    }
}

class NorwegianBlueParrot extends Bird {
    constructor(data) {
        super(data);
        this._voltage = data.voltage;
        this._isNailed = data.isNailed;
    }

    get plumage() {
        if (this.voltage > 100) return "그을렸다"
        return "예쁘다";
    }

    get airSpeedVelocity() {
        return (this.isNailed) ? 0 : 10 + this._voltage / 10;
    }
}

class EuropeanSwallowDelegate {
    get airSpeedVelocity() {
        return 35;
    }
}

class AfricanSwallowDelegate {
    constructor(data) {
        this._numberOfCoconuts = data.numberOfCoconuts;
    }

    get airSpeedVelocity() {
        return 40 - 2 * this._numberOfCoconuts;
    }
}

class NorwegianBlueParrotDelegate {
    constructor(data) {
        this._voltage = data.voltage;
        this._isNailed = data.isNailed;
    }

    get airSpeedVelocity() {
        return (this._isNailed) ? 0 : 10 + this._voltage / 10;
    }
}
