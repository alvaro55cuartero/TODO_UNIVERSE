const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const config = require("./config/database");
const morgan = require("morgan");

const app = express();
const PORT  = process.env.NODE_ENV || 3000;


mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
mongoose.connection.on("connected", () => {});
mongoose.connection.on("error", (err) => {console.log("DATABASE ERROR: " + err)});

const userRoute = require("./API/routes/users.js");
const textRoute = require("./API/routes/texts.js");
const characterRoute = require("./API/routes/characters.js");

//app.use(cors({origin: "http://localhost:8080"}));

app.use(cors());

app.use(morgan('tiny'));

app.use(express.json());


//Routes

app.use("/user", userRoute);
app.use("/text", textRoute);
app.use("/character", characterRoute);

app.listen(PORT);