const express = require("express");
const model = require("./dbcon/mongdb");
const router = express.Router();

const bcript = require("bcrypt");

const saltrounds = 10;
//                                                                    // user registration using hashed password
router.post("/post", (req, res) => {
  bcript.hash(req.body.password, saltrounds, async (err, hash) => {
    if (err) res.send(err);
    else {
      const addItem = new model({
        username: req.body.username,
        password: hash,
        email_id: req.body.email,
      });
      const serres = await addItem.save();
      // console.log(serres);
      res.send(serres);
    }
  });
});
//                                                    //login user authentication & cookie creation
router.post("/login", async (req, res) => {
  const validation = {
    username: req.body.username,
  };
  model.find(validation, async (err, result) => {
    if (result.length > 0) {
      await bcript.compare(
        req.body.password,
        result[0].password,
        (err, rest) => {
          if (rest) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send("wrong username and password combination");
          }
        }
      );
    } else {
      res.send("user does not exist");
    }
  });
  //                                                          // console.log(serverval.length);
});
//                                                            //checking loggined or not || cookie check
router.get("/login", (req, res) => {
  if (req.session.user) {
    console.log("login session create");
    console.log(req.session.user[0].username);
    res.send({ loggedin: true, user: req.session.user });
  } else {
    res.send({ loggedin: false });
  }
});
module.exports = router;
