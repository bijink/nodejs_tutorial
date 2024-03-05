/** @prettier */
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 8081;

app.use((req, res, next) => {
  console.log("Middleware");
  next();
});
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "samplehtml.html"));
  next();
});
app.get("/signup", (req, res, next) => {
  res.sendFile(path.join(__dirname, "signup.html"));
  // next();
});
app.post("/signup", (req, res, next) => {
  const body = req.body;
  console.log(body);

  res.send(`
    <body>
      <h1>${body.fname}<h1/>
      <h1>${body.lname}<h1/>
      <h2>${body.mobile}<h2/>
    <body/>
  `);
  next();
});
app.use((req, res) => {
  console.log("end");
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
