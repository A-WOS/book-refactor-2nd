const invoicesJson = require('./invoices.json');
const playsJson = require('./plays.json');

function statement(invoice, plays) {
    const statementData = {};

    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances;

    return renderPlainText(statementData, plays);
}

function renderPlainText(data, plays) {
    let result = `청구 내역 (고객명: ${data.customer})\n`;

    for (let perf of data.performances) {
        result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience}석)\n`
    }

    result += `총액: ${usd(totalAmount())}\n`;
    result += `적립 포인트: ${(totalVolumeCredits())}점\n`;

    return result;

    function totalAmount() {
        let result = 0;

        for (let perf of data.performances) {
            result += amountFor(perf);
        }

        return result;
    }

    function totalVolumeCredits() {
        let volumeCredits = 0;
        for (let perf of data.performances) {
            volumeCredits += volumeCreditsFor(perf);
        }
        return volumeCredits;
    }

    function usd(aNumber) {
        return new Intl.NumberFormat(
            "en-US",
            {style: "currency", currency: "USD", minimumFractionDigits: 2}
        ).format(aNumber / 100);
    }

    function volumeCreditsFor(perf) {
        let volumeCredits = 0;

        volumeCredits += Math.max(perf.audience - 30, 0);

        if ("comedy" === playFor(perf).type) {
            volumeCredits += Math.floor(perf.audience / 5);
        }

        return volumeCredits;
    }

    function playFor(perf) {
        return plays[perf.playID];
    }

    function amountFor(aPerformance) {
        let result = 0;

        switch (playFor(aPerformance).type) {
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
                throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
        }

        return result;
    }
}

const result = statement(invoicesJson[0], playsJson);
console.log(result);
