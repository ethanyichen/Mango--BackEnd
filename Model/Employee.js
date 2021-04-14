class Employee {
    constructor(employeeID, employeeName, hiringWarehouseID, salary) {
        this._employeeID = employeeID;
        this._employeeName = employeeName;
        this._hiringWarehouseID = hiringWarehouseID;
        this._salary = salary;
    }

    get employeeID() {
        return this._employeeID;
    }

    get employeeName() {
        return this._employeeName;
    }

    get hiringWarehouseID() {
        return this._hiringWarehouseID;
    }

    get salary() {
        return this._salary;
    }
}
export default Employee;