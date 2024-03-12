const express = require('express');
const app = express();
require("./connection/conn");
const auth = require("./routs/auth")
app.use(express.json());

app.put("/", (req, res)=>{
    res.send("hello");
})

app.use("/api/v1", auth);

app.listen (3000, ()=>{
    console.log("server Started"); 
})
