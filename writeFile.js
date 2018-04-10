var fs = require('fs');
var http = require('http');

    
fs.readFile('data.txt','utf-8',function(err,data){

    console.log("data->",data);
    
    fs.appendFile('mynewfile1.txt', data, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

});
//console.log("content->",content);



