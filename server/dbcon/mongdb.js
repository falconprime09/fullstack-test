const mongoose = require("mongoose");
const mondb = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  emil_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("login", mondb);
