class Order {
    constructor(data) {
        this._pirority = data.priority;
    }
}








// 클라이언트
highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;

