var http = require('http')
var fs = require('fs')

http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('samplehtml.html', (err, data) => {
      res.writeHead(200, { "Content-type": "text/html" })
      res.write(data)
      res.end()
    })
  } else if (req.url === '/signup') {
    fs.readFile('signup.html', (err, data) => {
      res.writeHead(200, { "Content-type": "text/html" })
      res.write(data)
      res.end()
    })
  } else {
    res.writeHead(404, { "Content-type": "text/html" })
    res.write('Page not found!')
    res.end()
  }
}).listen(8080, () => {
  console.log('Server started...');
})

