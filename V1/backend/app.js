const express = require("express");
const app = express();

const PORT = 5000;

const userRoute = require("./API/routes/user.js");


app.use(express.json());


app.use("/user", userRoute);

app.get("/", (req, res)=>{
    console.log(req);
    res.send(req.body);
});

app.post("/", (req, res)=>{
    console.log(req);
    res.send(req.body);
});

app.listen(PORT);