export class Order {
    constructor(data) {
        this._pirority = data.priority;
    }

    get priority()  {return this._priority.toString();}
    set priority(aString)   {this._pirority = new Priority(aString);}
}

class Priority {
    constructor(value) {
        this._value = value;
    }

    toString() {return this._value;}
}


// 클라이언트
highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;

