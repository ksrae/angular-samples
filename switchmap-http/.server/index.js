const express = require('express')
const app = express()
var cors = require('cors')


var index = 0;
var indexing = 0;

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {

})

app.get("/api", (req, res) => {
  setTimeout(() => {
    res.send({
      result: index++
    })
  }, 1000);

});

app.get("/apii", (req, res) => {
  console.log('body:', req.body);
  console.log('username', req.body.username);
  setTimeout(() => {
    res.send({
      result: indexing++
    })
  }, 1000);

});

app.post("/login", (req, res) => {
  console.log('body:', req.body);
});

app.listen(3000, () => console.log("Listening on port 3000..."));
