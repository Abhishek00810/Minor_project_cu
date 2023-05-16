const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
var md5 = require('md5');
const app = express();
app.use(express.json());
app.use(cors());
const axios = require("axios");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/registry');
}

const Cred = new mongoose.Schema({
  name: String,
  password: String
});

const Register = mongoose.model('Cred', Cred);


app.post("/registration", async (req, res) => {
  Register.findOne({ name: req.body.username })
    .then((docs) => {
      if (!docs) {
        const vals = new Register({
          name: req.body.username,
          password: md5(req.body.password)
        })
        vals.save()

          .then(function (models) {
            console.log("successfully saved")
            console.log(models);
          })
          .catch(function (err) {
            console.log(err);
          });
      }
      else {
        console.log("already registered")
      }
    })
    .catch((err) => {
      console.log(err);
    });

})

app.post("/authenticate", async (req, res) => {
  Register.findOne({ name: req.body.username })
    .then(async (docs) => {
      if (!docs) {
        console.log("register youself")
        res.send("You haven't Registered yourself")
      }
      else {
        console.log(md5(docs.password))
        if (md5(req.body.password) === (docs.password)) {
          const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: req.body.username, secret: req.body.username, first_name: req.body.username },
            { headers: { "Private-Key": "f5b25ba6-edd0-480f-a24f-3376e62eba62" } }
          );
          return res.status(r.status).json(r.data);
        }
        else {
          console.log("invaldi")
          res.send("Invalid Credentials")
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3001);