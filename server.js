var express = require("express");
var cors = require("cors");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var port = 5000;
var url = "mongodb://127.0.0.1";
var dbName = "my_new-DB";

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
  res.send({ express: "ALoha" });
  //console.log("What is a response object ", res);
  // if (res.status(200)) return res.send({ express: "Aloha" });
  // else if (res.status(403)) return res.send({ express: "Forbidden" });
  // else return res.status(404).send({ express: "Not Found" });
});

app.get("/contacts/get-contacts", (req, res, next) => {
  let newPeople = [];
  MongoClient.connect(url, (err, client) => {
    assert.equal(null, err);
    var cursor = client.db(dbName);
    console.log(cursor);
    cursor.forEach(
      (doc, err) => {
        assert.equal(null, err);
        newPeople.push(doc);
      },
      () => {
        db.close();
        res.render("");
      }
    );
  });
});

app.post("/contacts", (req, res) => {
  //Saving to Node server & Mongodb
  const rego = {
    fNAME: req.body.firstName,
    lNAME: req.body.lastName,
    eMAIL: req.body.email
  };
  MongoClient.connect(url, (err, db) => {
    assert.equal(null, err);
    db.collection("people").insertOne(rego, (err, result) => {
      assert.equal(null, err);
      console.log("New Inserted Data", result);
      db.close();
    });
  });
  res.redirect("/");

  let displayPeople = [];
  displayPeople.push(rego);
  console.log(newPeople);
  res.send({ express: displayPeople });
});

app.listen(port, () => console.log("Listening on 5000"));

// //Saving to Mongodb
// var personInfo = req.body;

// if (!personInfo.firstName || !personInfo.lastName || !personInfo.email) {
//   res.status(404);
// } else {
//   var newPerson = new Person({
//     f: personInfo.firstName,
//     l: personInfo.lastName,
//     e: personInfo.email
//   });

//   newPerson.save((err, Person) => {
//     if (err) res.status(401).send("Error", err.message);
//     else res.status(201).send("Successfully added new peron");
//   });

//   res.end();
// });

// app.get("/backend", (req, res) => {
//   console.log("Backend");
//   res.writeHead(200, { "Content-Type": "application/json" });
//   console.log("New People Registered => ", JSON.stringify(newPeople));
//   res.end(JSON.stringify(newPeople));
// });

// //Get Person List

// app.get("/contacts/added", (req, res) => {
//   Person.find((err, response) => {
//     if (err) console.log("Error finding person");
//     else res.status(200).send(response);
//   });
// });

// /*Update Person (Command)
// curl -X PUT --data "name=Henrietta"
// http://localhost:3000/contacts/5d030700e6d9c89004880b01
// **/

// app.put("/person/:id", (req, res) => {
//   Person.findAndUpdate(
//     "5de76757678d0ef1e4eba1c6",
//     {
//       name: "Bruce Wayne"
//     },
//     (err, response) => {
//       if (err)
//         res.json({
//           message: "Error in updating person with id " + req.params.id
//         });
//       res.json(response);
//     }
//   );
// });

// /*Delete Person (Command)
// curl -X DELETE localhost:3000/contacts/[id]**/

// app.delete("/contacts/:id", (req, res) => {
//   Person.findByIdAndDelete(req.params.id, (err, response) => {
//     if (err)
//       res.json({
//         message: "Error in deleting record id " + req.params.id
//       });
//     else
//       res.json({
//         message: "Person with id " + req.params.id + " removed."
//       });
//   });
// });

// mongoose.connect(, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// var personSchema = mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String
// });
// var Person = mongoose.model("Person", personSchema);
