import {createRequire} from "module";
import createStatementData from './createStatementData.js';

const require = createRequire(import.meta.url);

function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data, plays) {
    let result = `청구 내역 (고객명: ${data.customer})\n`;

    for (let perf of data.performances) {
        result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`
    }
    result += `총액: ${usd(data.totalAmount)}\n`;
    result += `적립 포인트: ${data.totalVolumeCredits}점`;
    return result;

    function usd(aNumber) {
        return new Intl.NumberFormat("en-US",
            {style: "currency", currency: "USD", minimumFractionDigits: 2}
        ).format(aNumber / 100);
    }
}

// NOTE: 예제 코드 실행을 위한 임시 구문
const invoicesJson = require('./invoices.json');
const playsJson = require('./plays.json');

console.log(statement(invoicesJson[0], playsJson));
