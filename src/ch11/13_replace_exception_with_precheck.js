class ResourcePool {
    constructor() {
        this.available = Object();
        this.allocated = Object();
    }

    get() {
        const result = this.available.isEmpty() ? Resource.create() : this.available.pop();
        this.allocated.add(result);
        return result;
    }
}

class Resource {
    static create() { }
}
