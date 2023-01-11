class Organization {
    constructor(data) {
        this._data = data;
    }
}
const organization = new Organization({name: "애크미 구스베리", country: "GB"});
function getRawDataOfOrganization() {return organization._data;}

/*
result += `<h1>${getRawDataOfOrganization().name}</h1>`;  //읽기 예
getRawDataOfOrganization().name = newName;                //쓰기 예
 */