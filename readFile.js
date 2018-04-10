var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){
   exports.fileData =  fs.readFile('data.txt',function(err,data){
        res.writeHead(200,{'Content-Type':   'text/html'});
        res.write(data);
        res.end();
        console.log("data->",data);
    })
}).listen(9093);