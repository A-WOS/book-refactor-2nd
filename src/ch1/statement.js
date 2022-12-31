import {createRequire} from "module";
import {expect} from "chai";
import createStatementData from "./createStatementData.js";

const require = createRequire(import.meta.url);

function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
    let result = `청구 내역 (고객명: ${data.customer})\n`;
    for (let perf of data.performances) {
        result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
    }
    result += `총액: ${usd(data.totalAmount)}\n`;

    result += `적립 포인트: ${data.totalVolumeCredits}점\n`;

    return result;

    function usd(aNumber) {
        return new Intl.NumberFormat(
            "en-US",
            {
                style: "currency", currency: "USD",
                minimumFractionDigits: 2
            }).format(aNumber / 100);
    }
}

// NOTE: 예제 코드 실행을 위한 임시 구문
const invoicesJson = require('./invoices.json');
const playsJson = require('./plays.json');

let result = statement(invoicesJson[0], playsJson);
console.log(result);

it('출력 결과 검사', () => {
    expect(
        '청구 내역 (고객명: BigCo)\n' +
        ' Hamlet: $650.00 (55석)\n' +
        ' As You Like It: $580.00 (35석)\n' +
        ' Othello: $500.00 (40석)\n' +
        '총액: $1,730.00\n' +
        '적립 포인트: 47점\n'
    ).to.equal(result);
});