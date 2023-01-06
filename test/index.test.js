import {createRequire} from "module";
import {Province, sampleProvinceData} from "../src/ch4/index.js";

const require = createRequire(import.meta.url);
const assert = require('assert');
describe('province', function() {
    it('shortfall', function () {
        const asia = new Province(sampleProvinceData()); // 픽스처 설정
        assert.equal(asia.shortfall, 5); // 검증
    });
});
