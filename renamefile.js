var http=require('http');
 var fs= require('fs');

 http.createServer(function(req , res){
    fs.rename('read.html','read.js',function(err){
        if(err) return "can't rename file"
        console.log("file name change");
    })
    res.end("file name changed")

 }).listen(3000)