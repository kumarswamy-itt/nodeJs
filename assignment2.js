const fs = require('fs');
const util = require('util');

 var readData = fs.readFile('assignment2Data.txt','utf-8',(err,data)=>{
if(err){
    //console.log("Error!!!");
}else{
     jsonArray = JSON.parse(data);
     
   // console.log("jsonArray--",jsonArray);
    jsonArray.forEach(function(jsonObj) {
       // console.log(jsonObj);
        var key;
        var dataSorted = []; // Create an empty array

        for (key in jsonObj) {  // Iterate through each key of the JSON data
        dataSorted.push(key);
        }
        dataSorted.sort();


        for (var i = 0; i < dataSorted.length; i++) {
            var key = dataSorted[i];
            var outputData = key + "," + jsonObj[key]+"\r\n";
            console.log( "outputData--",outputData);
            fs.appendFile('outputData.txt',outputData,(err)=>{
                if(err){
                    console.log("!!!error updating data");
                }
            })
          }

      });


}

 })