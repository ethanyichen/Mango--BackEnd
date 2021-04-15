import mongoose from 'mongoose';
import DatabaseModelManager from "./DatabaseModelManager.js";
import CustomerController from "./CustomerController.js";
export default class DatabaseConnectionHandler {
    constructor() {
        console.log("Connecting to Database");
        this.dbConnect().catch(console.error);
    }
    async dbConnect(){
        /**
         * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
         * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
         */
        const uri = "mongodb+srv://eason123:12346578@cluster0.0cwfe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

        try {
            // Connect to the MongoDB cluster
            mongoose.connect(
                uri,
                { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
                    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
            }
            );
            console.log("Mongoose connected");

            this.databaseModelManager = new DatabaseModelManager(mongoose);
            // const Customer = databaseModelManager.Customer;
            // const customer1 = new Customer({customerID: 8385047,
            // cName: "Baguette",
            //     phoneNum: 6048392817});
            // console.log(customer1.phoneNum);
            // const customerController = new CustomerController(mongoose, databaseModelManager);
            // customerController.addCustomer(customer1);
            // Kitten.find({ name: /^fluff/ }).then((result) => {
            //     console.log(result);
            // });

        } catch (e) {
            console.log("could not connect");
            console.log(e.message);
        }
    }

    addCustomer(cName, phoneNum) {
        const Customer = this.databaseModelManager.Customer;
        const randomCustomerID = Math.floor(Math.random() * 10000000);
        const customerToAdd = new Customer({customerID: randomCustomerID,
            cName: cName,
            phoneNum: phoneNum});
        console.log("Adding Customer to database\n" + "Name: " + cName + "\n" + "phone number: " + phoneNum);
        const customerController = new CustomerController(mongoose, this.databaseModelManager);
        customerController.addCustomer(customerToAdd);

}

}