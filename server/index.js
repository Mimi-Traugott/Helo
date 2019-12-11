require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  ctrl = require("./controller"),
  { SERVER_PORT, CONNECTION_STRING } = process.env,
  app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("DB Connected");
});

//Auth endpoints
app.post('/api/register', ctrl.register)
app.post('/api/login', ctrl.login)


const port = SERVER_PORT;
console.log(port);
app.listen(port, () => console.log(`up and running on ${port}`));
