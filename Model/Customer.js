class Customer {
    constructor(customerID, customerName, customerPhoneNum) {
        this._customerID = customerID;
        this._customerName = customerName;
        this._customerPhoneNum = customerPhoneNum;
    }

    get customerID() {
        return this._customerID;
    }

    get customerName() {
        return this._customerName;
    }

    get customerPhoneNum() {
        return this._customerPhoneNum;
    }
}
export default Customer;