class TrackingInformation {
    get shippingCompany() {return this._shippingCompany;}
    set shippingCompany(arg) {this._shippingCompany = arg;}
    get trackingNumber() {return this._trackingNumber;}
    set trackingNumber(arg) {this._trackingNumber = arg;}
    get display() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
}

class Shipment {
    get trackingInfo() {
        return this._trackingInformation.display;
    }
    get trackigInformation() {return this._trackingInformation;}
    set trackigInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }
}

/* 클라이언트
aShipment.trackingInformation.shippingCompany = request.vendor;
 */

