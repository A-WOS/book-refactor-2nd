import {createRequire} from "module";
import {expect} from 'chai';
import {sampleProvinceData} from '../src/ch4/province.js';
import {Province} from '../src/ch4/province.js';

describe('province', function () {
    let asia;
    beforeEach(function () {
        asia = new Province(sampleProvinceData());
    })

    it('shortfall', function() {
        expect(asia.shortfall).equal(5);
    })

    it('profit', function() {
        expect(asia.profit).equal(230);
    })
})


