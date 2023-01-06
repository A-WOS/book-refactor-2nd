import {createRequire} from "module";
import {Province, sampleProvinceData} from "../../src/ch4/province.js";

const require = createRequire(import.meta.url);
const assert = require('assert');

describe('province', function () {
    it('shortfall', function () {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortfall, 5);
    })
})
