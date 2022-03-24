var http = require('http');
var fs = require('fs');

http.createServer(function( req , res){

    fs.unlink('new.txt' ,function(err){
        if(err) return "Can't delete file"
        console.log("file deleted ")
    })
    res.end('file deleted')
}).listen(3000)