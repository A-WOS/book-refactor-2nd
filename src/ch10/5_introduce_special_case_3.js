const simpleJsonData = {
    name: "애크미 보스턴",
    location: "Malden MA",
    // 더 많은 현장(site) 정보
    customer: {
        name: "애크미 산업",
        billingPlan: "plan-451",
        paymentHistory: {
            weeksDelinquentInLastYear: 7
            // 중략
        },
        // 중략
    }
}

const unknownJsonData = {
    name: "물류창고 15",
    location: "Malden MA",
    // 더 많은 현장(site) 정보
    customer: "미확인 고객",
}

function enrichSite(inputSite) {
    const result = _.cloneDeep(inputSite);
    const unknownCustomer = {
        isUnknown: true,
        name: "거주자",
        billingPlan: registry.billingPlans.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0,
        }
    };

    if (isUnknown(result.customer)) result.customer = unknownCustomer;
    else result.customer.isUnknown = false;
    return result;
}

function isUnknown(aCustomer) {
    return aCustomer === "미확인 고객";
}

function client1Code() {
    const rawSite = simpleJsonData;
    const site = enrichSite(rawSite);
    const aCustomer = site.customer;
    // ... 수많은 코드 ...
    const customerName = aCustomer.name;
}

function client2Code() {
    const plan = aCustomer.billingPlan;
}

function client3Code() {
    const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
