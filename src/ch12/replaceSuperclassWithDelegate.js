class CatalogItem {
    constructor(id, title, tags) {
        this._id = id;
        this._title = title;
        this._tags = tags;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    hasTage(arg) {
        return this._tags.includes(arg);
    }
}

class Scroll extends CatalogItem {
    constructor(id, title, tags, dateLastCleaned) {
        super(id, title, tags);
        this._lastCleaned = dateLastCleaned;
    }

    needsCleaning(targetDate) {
        const threshold = this.hasTage("revered") ? 700 : 1500;

        return this.daysSinceLastCleaning(targetDate) > threshold;
    }

    daysSinceLastCleaning(targetDate) {
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
    }
}
