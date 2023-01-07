import {expect} from 'chai';
import {printOwing} from '../../src/ch6/extract_function.js';
import 'sinon';

describe('Chapter 6 - 함수 추출하기', function () {
    it('printOwing', function () {
        const invoice = {
            orders: [
                {
                    amount: 1234,
                }
            ],
            customer: "Test Customer",
        };
        const invoiceData =
            '******************\n' +
            '**** 고객 채무 ****\n' +
            '******************\n' +
            '고객명: Test Customer\n' +
            '채무액: 1234\n' +
            '마감일: ';

        expect(printOwing(invoice).startsWith(invoiceData)).to.be.true;
    });
});
