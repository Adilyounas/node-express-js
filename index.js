const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")
const app = express();

const port = 3000;


//express use
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

//to show html in browser
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

//to get data from html input tag
app.post("/" , (req,res)=>{
  console.log(req.body);
  res.json(({
    "succuss":true
  }))
})

//get data from postman
app.post("/newData" ,(req,res)=>{
  console.log(req.body);
res.send(req.body)
})




//server for node js
app.listen(port, () => {
  console.log("Express Connected!");
});
