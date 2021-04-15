import mongoose from 'mongoose';

export default class DatabaseModelManager {
    constructor(mongoose) {
        this.mongoose = mongoose;

        this.createCutomerModel();
    }
    createCutomerModel(){
        const customerSchema = new mongoose.Schema({
            customerID: {type: Number, required: true, index: true, unique: true},
            cName: String,
            phoneNum: String
        });
        this.Customer = mongoose.model('Customer', customerSchema);
    }
}