class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }

    get name() { return this._name; }
    set name(aString) { this._name = aString; }
    get country() { return this._country; }
    set country(aString) { return this._country = aString; }
}

const organization = new Organization({name: "Awos", country: "Korea"});
function getOrganization() { return organization; }

let result = "";
result += `<h1>name: ${getOrganization().name}</h1>\n`; // 읽기 예
result += `<h1>country: ${getOrganization().country}</h1>`; // 읽기 예

getOrganization().name = "AWS"; // 쓰기 예
getOrganization().country = "America"; // 쓰기 예

console.log(result);
