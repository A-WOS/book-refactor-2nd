import {expect} from 'chai';
import {Province, sampleProvinceData} from "../src/ch4/index.js";

describe('province', function() {
    it('shortfall', function () {
        const asia = new Province(sampleProvinceData()); // 픽스처 설정
        expect(asia.shortfall).equal(5); // 검증
    });
});
