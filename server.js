let express = require("express");
let cors = require("cors");
let app = express();
require("dotenv").config();

let mysql = require("mysql");
let port = 5000;

// app.use(express.static(path.join(__dirname, "build")));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.set("json spaces", 4);

/**Inert back each time db connection inside .env */

db.connect((err) => {
  if (err) {
    console.log("error connecting" + err.stack);
    return;
  } else {
    console.log("Connected to mysql");
  }
});

app.get("/", (req, res) => {
  res.send({ express: "Aloha from express" });
});

var newPeople = [];
app.get("/backend", (req, res) => {
  try {
    console.log("Backend");
    res.writeHead(200, { "Content-Type": "application/json" });
    console.log("New People Registered => ", JSON.stringify(newPeople));
    res.end(JSON.stringify(newPeople));
  } catch (err) {
    console.log("Error", err);
  }
});

app.post("/contacts", (req, res) => {
  //Saving to Node server
  const rego = {
    first: req.body.firstName,
    last: req.body.lastName,
    email: req.body.email,
    hero: req.body.superhero,
    age: req.body.age,
    food: req.body.food,
    hobbies: req.body.hobbies,
  };
  newPeople.push(rego);
  console.log(newPeople);
  const sql = `INSERT INTO people (first,last,email,hero,age,food,hobbies) VALUES (?)`;
  const post = rego;
  console.log("Inserted into table", post);
  db.query(sql, post, (err, result) => {
    if (err) {
      console.log("error", err.stack);
    } else {
      console.log("INSERTED INTO MYSQL DB/TABLE ", result.affectedRows);
      console.log(sql);
    }
  });
  res.send({ express: newPeople });
});

//select all people
app.get("/people/list", (req, res) => {
  const sql = "SELECT * FROM people";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log("Result added to people table ", sql);
      res.send(result);
    }
  });
});

//get a specific id from url param
app.get("/people/list/:id", (req, res) => {
  const sql = `SELECT * FROM people WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    else res.send(result);
  });
});

// const rego = {
//   fNAME: req.body.firstName,
//   lNAME: req.body.lastName,
//   eMAIL: req.body.email,
//   fOOD: req.body.food,
//   aGE: req.body.age,
//   hOBBIES: req.body.hobbies,
//   sUPERHERO: req.body.superhero,
// };
// const sql = `INSERT INTO people () VALUES (${rego})`

app.listen(port, () => console.log("Listening on 5000"));
