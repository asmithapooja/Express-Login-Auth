const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  username : String,
  password : String
})

module.exports = mongoose.model("Auth", authSchema);


//03300.03

//99999.03.1