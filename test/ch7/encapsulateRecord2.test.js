import {expect} from 'chai';
import {getRawDataOfCustomers} from "../../src/ch7/encapsulateRecord2.js";

describe('고객 데이터를 별도로 지정하지 않았을 때', () => {
    it('id 가 "1920"인 고객의 이름이 "마틴 파울러" 로 반환된다.', () => {
        const customerData = getRawDataOfCustomers()['1920'];

        expect(customerData.name).to.equal('마틴 파울러');
    });

    it('id 가 "1920"인 고객의 사용 정보가 2개 반환된다.', () => {
        const customerData = getRawDataOfCustomers()['1920'];

        expect(Object.keys(customerData.usages).length).to.equal(2);
    });
});
