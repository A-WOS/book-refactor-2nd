function printOwing(invoice) {

    printBanner();

    const outstanding = calculateOutstanding(invoice);    // 함수 추출 완료, 추출한 함수가 반환한 값을 원래 변수에 저장

    recordDueDate(invoice); // 마감일 설정 로직을 함수로 추출
    printDetails(invoice, outstanding); // 지역 변수를 매개변수로 전달
}

function calculateOutstanding(invoice) {
    let result = 0;    // 추출할 코드 복사
    for (const o of invoice.orders) {
        result += o.amount;
    }
    return result  // 수정된 값 반환
}

function printBanner() {
    console.log('***********');
    console.log('**고객 채무**');
    console.log('***********');
}

function printDetails(invoice, outstanding) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(),
        today.getDate() + 30);
}

function getRating(driver) {
    return (driver.numberOfLateDeliveries > 5) ? 2 : 1;
}

function reportLines(aCustomer) {
    const lines = [];
    lines.push(["name", aCustomer.name]);
    lines.push(["location", aCustomer.location]);
    return lines;
}

function price(order) {
    // 가격 (price) = 기본 가격 - 수량 할인 + 배송비
    return order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100);
}
