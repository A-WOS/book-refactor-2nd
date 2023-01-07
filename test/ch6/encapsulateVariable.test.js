import {expect} from 'chai';
import {defaultOwner} from "../../src/ch6/encapsulateVariable.js";

describe('defaultOwner() 를 통해 기본 소유자를 가져온 뒤', () => {
    it('lastName 값 변경 시도 시 변경할 수 없다.', () => {
        const owner = defaultOwner();
        expect(() => owner.lastName = '방울').to.throw(TypeError);
    });
});
