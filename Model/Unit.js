class Unit {
    constructor(UnitID, WarehouseID) {
        this._UnitID = UnitID;
        this._WarehouseID = WarehouseID;
    }

    get UnitID() {
        return this._UnitID;
    }

    get WarehouseID() {
        return this._WarehouseID;
    }
}
export default Unit;