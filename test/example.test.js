import {createRequire} from "module";
import {expect} from 'chai';
import {statement} from '../src/ch1/statement.js';
import {htmlStatement} from '../src/ch1/statement.js';

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

describe('Chapter 1 HtmlStatement 함수 테스트', () => {
    it('HtmlStatement 함수 결과 확인', () => {
        expect(htmlStatement(invoicesJson[0], playsJson)).to.equal(
            '<h1>청구 내역 (고객명: BigCo)</h1>\n' +
            '<table>\n' +
            '<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>\n' +
            '  <tr><td>Hamlet</td><td>(55석)</td><td>$650.00</td></tr>\n' +
            '  <tr><td>As You Like It</td><td>(35석)</td><td>$580.00</td></tr>\n' +
            '  <tr><td>Othello</td><td>(40석)</td><td>$500.00</td></tr>\n' +
            '</table>\n' +
            '<p>총액: <em>$1,730.00</em></p>\n' +
            '<p>적립 포인트: <em>47</em>점</p>\n'
        );
    });
});
