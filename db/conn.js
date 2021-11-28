const mongoose = require("mongoose");
const conn = mongoose
  .connect(
"mongodb+srv://asim:Mardan8110@cluster0.btwlh.mongodb.net/Nodeapp?retryWrites=true&w=majority")
  .then(() => {
    console.log("db connected");
  })
  .catch(e => {
    console.log(e);
    console.log("catch errorr");
  });
