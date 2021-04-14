class Box {
    constructor(boxID, storingUnitID, ownerID, size) {
        this._boxID = boxID;
        this._storingUnitID = storingUnitID;
        this._ownerID = ownerID;
        this._size = size;
    }

    get boxID() {
        return this._boxID;
    }

    get storingUnitID() {
        return this._storingUnitID;
    }

    get ownerID() {
        return this._ownerID;
    }

    get size() {
        return this._size;
    }
}
export default Box;