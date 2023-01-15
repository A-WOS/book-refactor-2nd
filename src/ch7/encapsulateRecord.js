class Organization {
    constructor(data) {
        this._data = data;
    }
}

const organization = new Organization({name: "애크미 구스베리", country: "GB"});

function getRawDataOfOrganization() {return organization._data;}
function getOrganization() {return organization;}

function getNameOfOrganization() {
    return organization._data;
}

function setNameOfOrganization(newName) {
    getRawDataOfOrganization().name = newName;
}
