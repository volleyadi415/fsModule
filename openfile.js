var http = require('http');
var fs = require('fs');

http.createServer(function(req ,res){
    fs.open('new.txt', 'w', function (err, file) {
        if (err) return "Can't open file for write"
        console.log('Saved!');
        
      })
      res.end("file open")

}).listen(3000);