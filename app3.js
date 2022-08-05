const http = require('http');
const url  = require('url');
const fs   = require('fs');
const port = 8080;

http.createServer((req, res) => {
   let q = url.parse(req.url, true);
   let filename = "." + q.pathname;
   fs.readFile(filename, (req, err, data) => {
      if (req) {
         res.writeHead(200, {'Content-Type': 'text/html'});
         return res.end('Hey guys <a href="profile.html">Les go!</a>' );
      }
      if (err) {
         res.writeHead(404, {'Content-Type': 'text/html'});
         return err.end();
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
   });
}).listen(port, () => console.log(`Server listening ${port}...`));
