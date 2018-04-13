const fs = require("fs");

var callback = function(err,data){
    console.log("data in cb--",data.toString());
}

fs.readFile("./outputData.txt",callback);
console.log(" normal flow");
