/** @prettier */
var http = require("http");
var fs = require("fs");
var url = require("url");

http
  .createServer((req, res) => {
    var route = url.parse(req.url, true);
    // console.log(route.pathname);

    if (route.pathname === "/") {
      fs.readFile("samplehtml.html", (err, data) => {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (route.pathname === "/signup") {
      fs.readFile("signup.html", (err, data) => {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (route.pathname === "/signupaction") {
      var query = route.query;
      // console.log(query.fname);

      res.writeHead(200, { "Content-type": "text/html" });
      res.write(`
        <body>
          <h1>${query.fname}<h1/>
          <h1>${query.lname}<h1/>
          <h2>${query.mobile}<h2/>
        <body/>
      `);
      res.end();
    } else {
      res.writeHead(404, { "Content-type": "text/html" });
      res.write("Page not found!");
      res.end();
    }
  })
  .listen(8080, () => {
    console.log("Server started...");
  });
