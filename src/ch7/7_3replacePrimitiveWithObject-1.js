class Order {
    constructor(data) {
        this._pirority = data.priority;
    }

    get priority()  {return this._priority;}
    set priority(aString)   {this._pirority = aString;}
}








// 클라이언트
highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;

