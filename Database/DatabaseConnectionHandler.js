import mongoose from 'mongoose';
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
                { useNewUrlParser: true, useUnifiedTopology: true }, () => {
                    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
            }
            );
            console.log("Mongoose connected");

            const kittySchema = new mongoose.Schema({
                name: String
            });
            kittySchema.methods.speak = function () {
                const greeting = this.name
                    ? "Meow name is " + this.name
                    : "I don't have a name";
                console.log(greeting);
            };
            const Kitten = mongoose.model('Kitten', kittySchema);
            const fluffy = new Kitten({ name: 'fluffy' });
            fluffy.speak();
            fluffy.save(function (err, fluffy) {
                if (err) return console.error(err);
                fluffy.speak();
            });
            Kitten.find({ name: /^fluff/ }).then((result) => {
                console.log(result);
            });

        } catch (e) {
            console.log("could not connect");
            console.log(e.message);
        }
    }

}