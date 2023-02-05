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
        this._speciesDelegate = this.selectSpeciesDelegate(data);
    }
    get name() { return this._name;}
    get airSpeedVelocity() { return this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity : null; }

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
}

class SpeciesDelegate {
    constructor(data, bird) {
        this._bird = bird;
    }

    get plumage() {
        return this._bird._plumage || "보통이다";
    }
}

class EuropeanSwallowDelegate extends SpeciesDelegate {
    get airSpeedVelocity() { return 35; }
}

class AfricanSwallowDelegate extends SpeciesDelegate {
    constructor(data, bird) {
        super(data, bird);
        this._numberOfCoconuts = data.numberOfCoconuts;
    }
    get airSpeedVelocity() {
        return 40 - 2 * this._numberOfCoconuts;
    }
}

class NorwegianBlueParrot extends Bird {
    get plumage() {
        return this._speciesDelegate.plumage;
    }
}

class NorwegianBlueParrotDelegate extends SpeciesDelegate {
    constructor(data, bird) {
        super(data, bird);
        this._voltage = data.voltage;
        this._isNailed = data.isNailed;
    }

    get airSpeedVelocity() {
        return (this._isNailed) ? 0 : 10 + this._voltage / 10;
    }

    get plumage() {
        if (this._voltage > 100) return "그을렸다";
        else return this._plumage || "예쁘다";
    }
}
