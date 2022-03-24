var fs=require('fs');
var append = "hello node"
fs.appendFile('read.txt',append,function(err){
    if(err)throw err;
    console.log('Updated!');
});