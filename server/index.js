require("dotenv").config();
const express = require("express"),
      session = require('express-session'),
      massive = require("massive"),
      ctrl = require("./controller"),
      { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
      app = express();

app.use(express.json());

app.use(session({
  resave: false, 
  saveUninitialized: true,
  cookie: {maxAge: 1000 * 60 *60},
  secret: SESSION_SECRET
}))

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("DB Connected");
});

//Auth endpoints
app.post('/api/register', ctrl.register)
app.post('/api/login', ctrl.login)


const port = SERVER_PORT;
app.listen(port, () => console.log(`up and running on ${port}`));
