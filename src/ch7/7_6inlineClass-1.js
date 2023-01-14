class TrackingInformation {
    get shippingCompany() {return this._shippingCompany;}
    set shippingCompany(arg) {this._shippingCompany = arg;}
    get trackingNumber() {return this._trackingNumber;}
    set trackingNumber(arg) {this._trackingNumber = arg;}
}

class Shipment {
    get trackingInfo() {
        return `${this.shippingCompany}: ${this.trackigInformation}`;
    }
    get trackigInformation() {return this._trackingInformation;}
    set trackigInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }
    get shippingCompany() {return this._shippingCompany;}
    set shippingCompany(arg) {this._shippingCompany = arg;}
    get trackingNumber() {return this._trackingNumber;}
    set trackingNumber(arg) {this._trackingNumber = arg;}
}

/* 클라이언트
aShipment.shippingCompany = request.vendor;
 */

