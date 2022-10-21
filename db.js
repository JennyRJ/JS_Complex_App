//saves user login details to the database 


const mongodb = require("mongodb").MongoClient;

const connectionString =
    "mongodb+srv://Jenine:Ronnyk36@cluster0.sjnnt6x.mongodb.net/complex_App?retryWrites=true&w=majority";

mongodb.connect(
    connectionString, { useNewUrlParser: true, useUnifiedTopology: true },
    function(err, client) {
        module.exports = client.db();
        const app = require("./app");
        app.listen(3000);
    }
);
