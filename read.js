var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('test.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    console.log(data.toString())
    
    
    return res.end();
  }); 
}).listen(3000);