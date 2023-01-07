function xxNEWinNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

const newEnglanders = someCustomers.filter(c => xxNEWinNewEngland(c.address.state));
