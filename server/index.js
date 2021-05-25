const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/sample";
app.use(cors());
app.use(express.json());
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
connection = mongoose.connection;
connection.on("open", () => {
  console.log("mongodb is connected....");
});
app.get("/", (req, res) => {
  res.send("i am here server");
});

app.listen(3000, () => {
  console.log("sever is running on 3000");
});
