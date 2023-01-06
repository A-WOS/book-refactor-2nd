import {createRequire} from "module";
import {expect} from 'chai';
import {Province, sampleProvinceData} from "../../src/ch4/province.js";

const require = createRequire(import.meta.url);
const assert = require('assert');

describe('asseert_province', function () {
    it('shortfall', function () {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortfall, 5);
    })
})

describe('chai_province', function () {
    let asia;
    beforeEach(function () {
        asia = new Province(sampleProvinceData())
    });

    it('shortfall', function () {
        expect(asia.shortfall).equal(5);
    });

    it('profit', function () {
        expect(asia.profit).equal(230);
    });
})
