function rating(aDriver) {
    return aDriver.numberOfLateDeliveries > 5 ? 2: 1;
}

function reportLines(aCustomer) {
    const lines = [];
    gatherCustomerData(lines, aCustomer);
    return lines;
}

function gatherCustomerData(aLines, aCustomer) {
    out.push(["name", aCustomer.name]);
    out.push(["location", aCustomer.location]);
}
