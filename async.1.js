const fs = require("fs");
const async = require("async");
const util = require('util');
var _ = require('underscore')
var obj = {student: "/student.json", dept: "/departments.json"};
var combineData = {};
var structuredFinalData = {};
 
var writeComibinedData = function(err,data){
    console.log("data in cb--",data);
    fs.writeFile("studentDepartmentMap.json",JSON.stringify(data),"utf-8",(err)=>{

        if (err) console.error(err.message);
    })
}

async.forEachOf(obj, (value, key, callback) => {
    fs.readFile(__dirname + value, "utf8", (err, data) => {
        if (err) return callback(err);
        try {
            combineData[key] = data;//JSON.parse(data);
            jsonArray = JSON.stringify(combineData);
            jsonArray.forEach(function(jsonObj) {
                // console.log(jsonObj);
                 var key;
                 var dataSorted = []; // Create an empty array
         
                 for (key in jsonObj) {  // Iterate through each key of the JSON data
                 dataSorted.push(key);
                 }
                 dataSorted.sort();
            });
            console.log("dataSorted--->"+dataSorted)
        } catch (e) {
            return callback(e);
        }
        callback();
    });
}, err => {
    if (err) console.error(err.message);
    // combineData is now a map of JSON data
    //console.error("combineData--",combineData);
    
  // writeComibinedData(err,combineData);
});