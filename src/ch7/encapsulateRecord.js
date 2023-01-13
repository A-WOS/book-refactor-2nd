class Organization {
    constructor(data) {
        this._data = data;
    }

    get name() { return this._data.name; }
    set name(aString) {
        this._data.name = aString;
    }
}

const organization = new Organization({name: "Awos", country: "Korea"});
function getOrganization() { return organization; }

let result = "";
result += `<h1>${getOrganization().name}</h1>`; // 읽기 예
getOrganization().name = "AWS"; // 쓰기 예

console.log(getOrganization()._data);
