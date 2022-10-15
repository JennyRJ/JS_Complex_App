const mongodb = require("mongodb").MongoClient;

let db;

const connectionString =
    "mongodb+srv://Jenine:Ronnyk36@cluster0.sjnnt6x.mongodb.net/complex_App?retryWrites=true&w=majority";

mongodb.connect(
    connectionString, { useNewUrlParser: true, useUnifiedTopology: true },
    function(err, client) {
        db = client.db();
        const app = require("./app");
        app.listen(3000);
    }
);