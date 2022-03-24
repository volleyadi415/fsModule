
var http=require('http');
var fs=require('fs');

http.createServer(function (req, res) {
    fs.writeFile('write.txt','hello script again', function(err) {
        if(err)throw err;
      console.log('saved!');
     
    });

    return res.end('Check file');
  }).listen(3000);
  