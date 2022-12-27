const invoicesJson = require('./invoices.json');
const playsJson = require('./plays.json');

function statement(invoice, plays) {
    let result = `청구 내역 (고객명: ${invoice.customer})\n`;
    for (let perf of invoice.performances) {
        result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience}석)\n`
    }
    result += `총액: ${usd(appleSauce())}\n`;
    result += `적립 포인트: ${(totalVolumeCredits())}점\n`;
    return result;

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

    function volumeCreditsFor(aPerformance) {
        let volumeCredits = 0;

        volumeCredits += Math.max(aPerformance.audience - 30, 0);
        if ("comedy" === playFor(aPerformance).type)
            volumeCredits += Math.floor(aPerformance.audience / 5);

        return volumeCredits;
    }

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

    function usd(aNumber) {
        return new Intl.NumberFormat(
            "en-US",
            {style: "currency", currency: "USD",
                minimumFractionDigits: 2}).format(aNumber / 100);
    }

    function totalVolumeCredits() {
        let volumeCredits = 0;
        for (let perf of invoice.performances) {
            volumeCredits += volumeCreditsFor(perf);
        }

        return volumeCredits;
    }

    function appleSauce() {
        let totalAmount = 0;
        for (let perf of invoice.performances) {
            totalAmount += amountFor(perf);
        }

        return totalAmount;
    }
}

const result = statement(invoicesJson[0], playsJson);
console.log(result);
