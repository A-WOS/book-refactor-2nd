const organization = {name: "Awos", country: "Korea"};


function getRawDataOrganization() { return organization; }

let result = "";
result += `<h1>${getRawDataOrganization().name}</h1>`; // 읽기 예
getRawDataOrganization().name = "AWS"; // 쓰기 예
