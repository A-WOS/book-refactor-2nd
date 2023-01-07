import {createRequire} from "module";
import {expect} from 'chai';
import {sampleProvinceData} from '../src/ch4/province.js';
import {Province} from '../src/ch4/province.js';

const require = createRequire(import.meta.url);

describe('province', function () {
    it('shortfall', function() {
        const asia = new Province(sampleProvinceData());
        expect(asia.shortfall).equal(5);
    })

    it('profit', function() {
        const asia = new Province(sampleProvinceData());
        expect(asia.profit).equal(230);
    })
})


