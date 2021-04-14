class Rent {
    constructor(unitID, customerID, monthlyFee, startDate, endDate) {
        this._unitID = unitID;
        this._customerID = customerID;
        this._monthlyFee = monthlyFee;
        this._startDate = startDate;
        this._endDate = endDate;
    }

    get unitID() {
        return this._unitID;
    }

    get customerID() {
        return this._customerID;
    }

    get monthlyFee() {
        return this._monthlyFee;
    }

    get startDate() {
        return this._startDate;
    }

    get endDate() {
        return this._endDate;
    }
}
export default Rent;