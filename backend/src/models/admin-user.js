const mongoose = require("mongoose");

//create schema

const admin_user_schema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    
  },
  Fullname: {
    type: String,
    default:"no data"
  },
  Contect: {
    type: Number,
    default:7897898787
  },
  Address: {
    type: String,
    default:"no data"
  },
  Password: {
    type: String,
    required: true,
  },
  
  Profilephoto: {
    type: String,
    default:"no photo"
  },
});

const admin_user_model = mongoose.model("Admin-user-login", admin_user_schema);

module.exports = admin_user_model;
