class Membership {
    constructor(warehouseID, customerID, membershipStartDate) {
        this._warehouseID = warehouseID;
        this._customerID = customerID;
        this._membershipStartDate = membershipStartDate;
    }


    get warehouseID() {
        return this._warehouseID;
    }

    get customerID() {
        return this._customerID;
    }

    get membershipStartDate() {
        return this._membershipStartDate;
    }
}
export default Membership;