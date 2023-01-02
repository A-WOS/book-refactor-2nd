import {createRequire} from "module";
import {expect} from 'chai';
import {statement} from '../src/ch1/statement.js';

const require = createRequire(import.meta.url);
const assert = require('assert');
const invoicesJson = require("../src/ch1/invoices.json");
const playsJson = require("../src/ch1/plays.json");

describe('Node.js 기본 assertion 예제', () => {
    it('Bell 은 Bell 이다', () => {
        assert.equal('Bell', 'Bell');
    });

});

describe('Chai assertion 예제', () => {
    it('Bell 은 Bell 이다', () => {
        expect('Bell').to.equal('Bell');
    });
});

describe('Chapter 1 Statement 함수 테스트', () => {
    it('Statement 함수 결과 확인', () => {
        expect(statement(invoicesJson[0], playsJson)).to.equal(
            '청구 내역 (고객명: BigCo)\n' +
            ' Hamlet: $650.00 (55석)\n' +
            ' As You Like It: $580.00 (35석)\n' +
            ' Othello: $500.00 (40석)\n' +
            '총액: $1,730.00\n' +
            '적립 포인트: 47점\n'
        );
    });
});