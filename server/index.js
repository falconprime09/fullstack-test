const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const router = require("./route");
const url = "mongodb://localhost:27017/sample";

const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3010"],
    methods: ["GET,POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  session({
    key: "userId",
    secret: "loginsecrete",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);
app.use(router);

mongoose.connect(
  url,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, res) => {
    if (err) console.log(err);
    else console.log("db connected.....");
  }
);
connection = mongoose.connection;
connection.on("open", () => {
  console.log("mongodb is connected....");
});
app.get("/", (req, res) => {
  res.send("i am here server");
});

app.listen(3010, () => {
  console.log("sever is running on 3010");
});
