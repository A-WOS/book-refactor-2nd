class ResourcePool {
    constructor() {
        this.available = Object();
        this.allocated = Object();
    }

    get() {
        let result;
        if (this.available.isEmpty()) {
            result = Resource.create();
            this.allocated.add(result);
        } else {
            result = this.available.pop();
            this.allocated.add(result);
        }
        return result;
    }
}

class Resource {
    static create() {

    }
}
