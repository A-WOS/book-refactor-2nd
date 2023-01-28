import {expect} from 'chai';
import {TelephoneNumber} from "../../src/ch9/changeReferenceToValue.js";

describe('동일한 값으로 생성한 두 개의 전화번호 인스턴스를', () => {
    it('.equals 메서드로 비교하면 동일한 것으로 반환된다', () => {
        expect(new TelephoneNumber("312", "555-0142").equals(new TelephoneNumber("312", "555-0142"))).to.true
    });
});
