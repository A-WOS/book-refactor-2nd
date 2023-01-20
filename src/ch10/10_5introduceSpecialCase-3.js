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

// 클라이언트1
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;
let customerName;
if (aCustomer === "미확인 고객") customerName = "거주자";
else customerName = aCustomer.name;

// 클라이언트2
const Plan = (aCustomer === "미확인 고객") ?
    registry.billingPlans.basic
    : aCustomer.billingPlan;

// 클라이언트3
const weekDelinquent =  (aCustomer === "미확인 고객") ?
    0
    : aCustomer.paymentHistory.weekDelinquentInLastYear;
