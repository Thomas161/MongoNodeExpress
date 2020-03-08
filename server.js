var express = require("express");
var cors = require("cors");
var app = express();
var assert = require("assert");
var port = 5000;

// app.use(express.static(path.join(__dirname, "build")));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

app.set("json spaces", 4);

app.get("/", (req, res) => {
  res.send({ express: "Aloha from express" });
});

var newPeople = [];
app.get("/backend", (req, res) => {
  console.log("Backend");
  res.writeHead(200, { "Content-Type": "application/json" });
  console.log("New People Registered => ", JSON.stringify(newPeople));
  res.end(JSON.stringify(newPeople));
});

app.post("/contacts", (req, res) => {
  //Saving to Node server
  const rego = {
    fNAME: req.body.firstName,
    lNAME: req.body.lastName,
    eMAIL: req.body.email,
    fOOD: req.body.food,
    aGE: req.body.age,
    hOBBIES: req.body.hobbies,
    sUPERHERO: req.body.superhero
  };
  newPeople.push(rego);
  console.log(newPeople);
  res.send({ express: newPeople });
});

app.listen(port, () => console.log("Listening on 5000"));
