import {expect} from 'chai';
import {defaultOwner} from "../../src/ch6/encapsulateVariable.js";

describe('defaultOwner() 를 통해 기본 소유자를 여러 번 가져온 뒤', () => {
    it('첫 번째 객체의 lastName 을 변경해도 다른 객체의 lastName 은 변경되지 않는다.', () => {
        const owner1 = defaultOwner();
        expect(owner1.lastName).to.equal('파울러');

        const owner2 = defaultOwner();
        owner2.lastName = '방울';
        expect(owner1.lastName).to.equal('파울러');
    });
});
