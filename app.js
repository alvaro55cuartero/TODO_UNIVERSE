const http = require("http");
const fs = require("fs");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config/database");
const passport = require("passport");


mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {console.log("dpm")});
mongoose.connection.on("error", (err) => {console.log("DATABASE ERROR: " + err)});


const app = express();

const newsRoutes = require("./api/routes/news.js");
const usersRoutes = require("./api/routes/users.js");
const adminRoutes = require("./api/routes/admin.js");
const itemsRoutes = require("./api/routes/items.js");
const textsRoutes = require("./api/routes/texts.js");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

require("./config/passport.js")(passport);


app.use("/news", newsRoutes);
app.use("/admin", adminRoutes);
app.use("/items", itemsRoutes);
app.use("/texts", textsRoutes);
app.use("/users", usersRoutes);

app.listen(80);
