let express = require("express");
let mongoose = require('mongoose')


let app = express();

let port = 8080;

mongoose.connect("mongodb://localhost/Todo-Node")
let db = mongoose.connection;

db.once('open',()=>{
  console.log("Mongodb is connected succesfully")
})


app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});


module.exports = app;