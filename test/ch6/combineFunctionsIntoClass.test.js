import {expect} from 'chai';
import {Reading} from "../../src/ch6/combineFunctionsIntoClass.js";

describe('2017년 5월에 ivan 차를 10 잔 마신 사람은', () => {
    const rawReading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

    it('요금이 1 청구된다.', () => {
        const aReading = new Reading(rawReading);

        expect(aReading.baseCharge).to.equal(1);
    });

    it('세금이 1 청구된다.', () => {
        const aReading = new Reading(rawReading);

        expect(aReading.taxableCharge).to.equal(0);
    });
});

describe('2017년 5월에 ivan 차를 100 잔 마신 사람은', () => {
    const rawReading = {customer: "ivan", quantity: 100, month: 5, year: 2017};

    it('요금이 10 청구된다.', () => {
        const aReading = new Reading(rawReading);

        expect(aReading.baseCharge).to.equal(10);
    });

    it('세금이 9 청구된다.', () => {
        const aReading = new Reading(rawReading);

        expect(aReading.taxableCharge).to.equal(9);
    });
});
