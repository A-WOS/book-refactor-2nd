import {createRequire} from "module";
import {expect} from 'chai';
import {Province, sampleProvinceData} from "../../src/ch4/province.js";

const require = createRequire(import.meta.url);
const assert = require('assert');

describe('province', function () {
    it('shortfall', function () {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortfall, 5);
    })
})

describe('province', function () {
    it('shortfall', function () {
        const asia = new Province(sampleProvinceData());
        expect(asia.shortfall).equal(5);
    })

    it('profit', function () {
        const asia = new Province(sampleProvinceData());
        expect(asia.profit).equal(230);
    })
})
