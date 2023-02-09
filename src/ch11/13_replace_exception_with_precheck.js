class ResourcePool {
    constructor() {
        this.available = Object();
        this.allocated = Object();
    }

    get() {
        let result;
        if (available.isEmpty()) {
            result = Resource.create();
            this.allocated.add(result);
        } else {
            try {
                result = this.available.pop();
                this.allocated.add(result);
            } catch (e) {
                result = Resource.create();
                this.allocated.add(result);
            }
        }
        return result;
    }
}

class Resource {
    static create() {

    }
}
