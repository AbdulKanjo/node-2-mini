require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const controller = require("./controller");

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    // db.new_planes().then(res => console.log(res));
    // db.get_planes().then(res => console.log(res));
  })
  .catch(e => console.log(e));

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/api/planes", controller.getPlanes);
app.get("/api/planes", controller.getOnePlane);
app.post("/api/planes", controller.addPlane);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
