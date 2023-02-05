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

class Scroll {
    constructor(id, title, tags, dateLastCleaned) {
        this._catalogItem = new CatalogItem(id, title, tags);
        this._lastCleaned = dateLastCleaned;
    }

    needsCleaning(targetDate) {
        const threshold = this.hasTage("revered") ? 700 : 1500;

        return this.daysSinceLastCleaning(targetDate) > threshold;
    }

    get id() {
        return this._catalogItem.id;
    }

    get title() {
        return this._catalogItem.title;
    }

    tags(aString) {
        return this._catalogItem.hasTage(aString);
    }

    daysSinceLastCleaning(targetDate) {
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
    }
}
