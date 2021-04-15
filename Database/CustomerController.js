import mongoose from 'mongoose';
import DatabaseModelManager from "./DatabaseModelManager.js";

export default class CustomerController {
    customers = [];
    constructor(mongoose, DatabaseModelManager) {
        if(mongoose === undefined || DatabaseModelManager === undefined) {
            throw new Error("Undefined initialization Customer Controller")
        }
        this.mongoose = mongoose;
        const Customer = DatabaseModelManager.Customer;
    }

    addCustomer(customerToAdd){
        if(customerToAdd !== undefined && customerToAdd !== null) {
            this.customers.push(customerToAdd);
            customerToAdd.save(function (err, customerToAdd) {
                if (err) return console.error(err);
            });
        } else {
            throw new Error("Trying to add invalid Customer instance");
        }
    }
}