import {createRequire} from "module";
import {expect} from 'chai';
import {Province, sampleProvinceData} from "../../src/ch4/province.js";

const require = createRequire(import.meta.url);
const assert = require('assert');

describe('province', () => {
    it('shortfall', () => {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortfall, 5);
    });
});
