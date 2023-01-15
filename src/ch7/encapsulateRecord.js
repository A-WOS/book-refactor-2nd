class Organization {
    constructor(data) {
        this._data = data;
    }

    set name(aString) {this._data.name = aString;}
    get name() {return this._data.name;}
}

const organization = new Organization({name: "애크미 구스베리", country: "GB"});

function getOrganization() {return organization;}

function getNameOfOrganization() {
    return getOrganization().name;
}

function setNameOfOrganization(newName) {
    getOrganization().name = newName;
}
