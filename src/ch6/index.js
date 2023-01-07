function printOwing(invoice) {
    printBanner();

    // 미해결 채무(outstanding) 를 계산한다.
    let outstanding = calculateOutstanding(invoice);
    recordDueDate(invoice);
    printDetails(invoice, outstanding);

    function printBanner() {
        console.log("******************");
        console.log("**** 고객 채무 ****");
        console.log("******************");
    }

}

function printDetails(invoice, outstanding) {
    // 세부 사항을 출력한다.
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

function recordDueDate(invoice) {
    // 마감일(dueData)을 기록한다.
    const today = Clock.today;
    invoice.dueDate = new Data(today.getFullYear(), today.getMonth(),
        today.getDate() + 30);
}

function calculateOutstanding(invoice) {
    let outstanding = 0;
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }
    return outstanding;
}
