export function printOwing(invoice) {
    const logData = [];
    logData.push(printBanner());
    const outstanding = calculateOutstanding(invoice);
    recordDueDate(invoice);
    logData.push(printDetails(invoice, outstanding));
    return logData.join('');
}

function printBanner() {
    return printLog("******************") +
        printLog("**** 고객 채무 ****") +
        printLog("******************");
}

function calculateOutstanding(invoice) {
    let result = 0;
    for (const o of invoice.orders) {
        result += o.amount;
    }
    return result;
}

function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(),
        today.getDate() + 30);
}

function printDetails(invoice, outstanding) {
    return printLog(`고객명: ${invoice.customer}`) +
        printLog(`채무액: ${outstanding}`) +
        printLog(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

class Clock {
    static get today() {
        return new Date();
    }
}

function printLog(text) {
    return text + '\n';
}
