const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({

  username:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  userType:{
    type: String,
    required: true
  },
  DOB:{
    type: Date,
    required: true
  },
  image:{
    type: String,
    required: true
  },

});

const Users = mongoose.model("users", UsersSchema);

module.exports = Users;