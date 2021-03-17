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

/**Connection to MYSQL and precise table we would be using */

let db = mysql.createConnection({
  host: "*********",
  user: "***********",
  password: "**********",
  database: "*************",
});

db.connect((err) => {
  if (err) {
    console.log("error connecting" + err.stack);
    return;
  } else {
    console.log("Connected to mysql");
  }
});

/**Test route */
app.get("/", (req, res) => {
  res.send({ express: "Aloha from express" });
});

var newPeople = [];

/**View all data from ReactJs(Client) and view on backend (Node) */
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

/**Endpoint that takes all data from body of client and appends it to server and MySQL table */
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
  const post = rego;
  db.query("INSERT INTO people SET ?", post, (err, result) => {
    if (err) {
      console.log("error", err.stack);
    } else {
      console.log("INSERTED INTO MYSQL DB/TABLE ", result.affectedRows); //1
      // console.log(sql);
    }
  });

  res.send({ express: newPeople });
});

/**select all people table*/
app.get("/people/list", (req, res) => {
  const sql = "SELECT * FROM people";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log("People in table ", JSON.stringify(result));
      res.send(result);
    }
  });
});

/**get a specific id from url param*/
app.get("/people/list/:id", (req, res) => {
  const sql = `SELECT * FROM people WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    else res.send(result);
  });
});

/**Update record with specific id param */
app.get("/people/update/:id", (req, res) => {
  const sql = `UPDATE people SET hero =? WHERE id = ${req.params.id}`;
  db.query(sql, ["Batman"], (err, result) => {
    if (err) {
      console.log("Error", err.stack);
    } else {
      console.log(result.affectedRows);
    }
  });
});

/**Delete record with specific id at this endpoint */
app.get("/people/delete/:id", (req, res) => {
  const sql = `DELETE FROM people WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log("Error", err.stack);
    } else {
      console.log(result.affectedRows);
    }
  });
});

app.listen(port, () => console.log("Listening on 5000"));
