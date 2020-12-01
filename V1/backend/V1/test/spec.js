const mongoose = require("mongoose");
const config = require("../config/database");

before("Setup", () => {
    mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    mongoose.connection.on("connected", () => {});
    mongoose.connection.on("error", (err) => {console.log("DATABASE ERROR: " + err)});
});

after("Finsih", () => {
    mongoose.connection.close()
});
