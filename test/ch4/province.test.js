import {expect} from 'chai';
import {Province, sampleProvinceData} from "../../src/ch4/province.js";

describe('province', () => {
    it('shortfall', () => {
        const asia = new Province(sampleProvinceData());
        expect(asia.shortfall).equal(5);
    });

    it('profit', () => {
        const asia = new Province(sampleProvinceData());
        expect(asia.profit).equal(230);
    });
});
