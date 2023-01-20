const a = {
    name: "에크미 보스턴",
    location: "Malden MA",
    customer: {
        name: "애크미 산업",
        billingPlan: "Plan-451",
        paymentHistory: {
            weeksDelinquentInLastYear: 7
        }
    }
}

const b = {
    name: "물류창고 15",
    location: "Malden MA",
    customer: "미확인 고객"
}

function enrichSite(aSite) {
    const result = _.cloneDeep(aSite);
    const unknownCustomer = {
        isUnknown: true,
        name: "거주자",
        billingPlan: registry.billingPlans.basic,
        paymentHistory: {
            weekDelinquentInLastYear: 0,
        }
    };

    if (isUnknown(result.customer)) result.customer = unknownCustomer;
    else result.customer.isUnknown = false;
    return result;
}

function isUnknown(aCustomer) {
    if (aCustomer === "미확인 고객") return true;
    else return aCustomer.isUnknown;
}

// 클라이언트1
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;
const customerName = aCustomer.name;

// 클라이언트2
const Plan = aCustomer.billingPlan;

// 클라이언트3
const weekDelinquent = aCustomer.paymentHistory.weekDelinquentInLastYear;
