var express = require("express");
var bodyParser = require("body-parser");

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./db/todo");
var { User } = require("./db/user");

var app = express();

app.use(bodyParser.json());
app.listen(3000, () => {
  console.log("Started on port 3000");
});

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});
