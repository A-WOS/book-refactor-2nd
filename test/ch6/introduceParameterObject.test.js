import {expect} from 'chai';
import {station, readingOutsideRange} from "../../src/ch6/introduceParameterObject.js";

describe('50 미만 온도의 station 1개 데이터가 정의되어 있을 때', () => {
    it('온도가 50 ~ 60 범위를 벗어나는 스테이션 1개가 반환된다.', () => {
        const alerts = readingOutsideRange(station, 50, 60);

        expect(alerts.length).to.equal(1);
    });
});
