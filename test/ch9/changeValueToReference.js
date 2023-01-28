import {expect} from 'chai';
import { TelephoneNumber } from "../../src/ch9/4/9_4_1_changeReferenceToValue.js";

describe('참조 기반 동시성 값 평가', () => {
    it('telephone equals', function () {
        expect(new TelephoneNumber("312", "555-0142")
            .equals(new TelephoneNumber("312", "555-0142"))).to.true;
    });
});
