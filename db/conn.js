const mongoose = require("mongoose");
const conn = mongoose
  .connect(
"mongodb+srv://asim:<password>@cluster0.btwlh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority  )"
  .then(() => {
    console.log("db connected");
  })
  .catch(e => {
    console.log(e);
    console.log("catch errorr");
  });
