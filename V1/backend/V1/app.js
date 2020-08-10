const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/database.js");

const PORT  = process.env.NODE_ENV || 3000;

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {console.log("MongoDB connected")});
mongoose.connection.on("error", (err) => {console.log("DATABASE ERROR: " + err)});


const userRoute = require("./API/routes/users.js");


app.use(express.json());


app.use("/user", userRoute);


app.listen(PORT);