require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      ctrl = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING} = process.env

      app = express()


app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB Connected')
})


const port = SERVER_PORT
app.listen(port, () => console.log(`up and running on ${port}`));


