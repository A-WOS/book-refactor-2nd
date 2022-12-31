import {createRequire} from "module";
import {expect} from "chai";

const require = createRequire(import.meta.url);

function statement(invoice, plays) {
    const statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enrichPerformance);
    statementData.totalAmount = totalAmount(statementData);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);
    return renderPlainText(statementData, plays);

    function enrichPerformance(aPerformance) {
        const result = Object.assign({}, aPerformance);
        result.play = playFor(result);
        result.amount = amountFor(result);
        result.volumeCredits = volumeCreditsFor(result);
        return result;
    }

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

    function amountFor(aPerformance) {
        let result = 0;

        switch (aPerformance.play.type) {
            case "tragedy": // 비극
                result = 40000;
                if (aPerformance.audience > 30) {
                    result += 1000 * (aPerformance.audience - 30);
                }
                break;

            case "comedy": // 희극
                result = 30000;
                if (aPerformance.audience > 20) {
                    result += 10000 + 500 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;

            default:
                throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`);
        }

        return result;
    }

    function volumeCreditsFor(aPerformance) {
        let volumeCredits = 0;

        volumeCredits += Math.max(aPerformance.audience - 30, 0);
        if ("comedy" === aPerformance.play.type)
            volumeCredits += Math.floor(aPerformance.audience / 5);

        return volumeCredits;
    }

    function totalAmount(data) {
        return data.performances
            .reduce((total, p) => total + p.amount, 0);
    }

    function totalVolumeCredits(data) {
        return data.performances
            .reduce((total, p) => total + p.volumeCredits, 0);
    }
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