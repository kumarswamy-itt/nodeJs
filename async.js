const fs = require("fs");
const async = require("async");
const util = require('util');


var obj = {student: "/student.json", dept: "/departments.json",sdmap:"/studentDepartmentMap.json"};
var combineData = {};

 
var writeComibinedData = function(err,data){
   // console.log("data in cb--",JSON.stringify(data));
    var cdata = {};
    var finalkey = 'Final json';
    cdata[finalkey] = []; 
   

    var sdmap =  data.sdmap.studDeptMap;
    var students = data.student.students;
    var departments = data.dept.departments;
   // console.log("sdmap---",sdmap);
   // console.log("students---",students);
   // console.log("departments---",departments);

    var key;
    var keySorted = []; // Create an empty array

    for (var i=0;i<sdmap.length;i++){

        let studentId  = sdmap[i].studentId;
        let departmentId = sdmap[i].departmentId;
        //console.log("k---",key);s
        
            var depname;
            var studentname;
        
            for (key in departments) {  
                if(departmentId == departments[key].departmentId){  
                    depname = departments[key].deptName;
                }
                for (key in students) {  
                    if(studentId == students[key].studentId){
                       studentname = students[key].stuName ;
                    }
                }
            }
            var data = {
                deptName: depname,
                studentname: studentname
            };

        cdata[finalkey].push(data);


    }

    fs.writeFile("DepartmentMap.json",JSON.stringify(cdata),"utf-8",(err)=>{

        if (err) console.error(err.message);
    })
}

async.forEachOf(obj, (value, key, callback) => {
    fs.readFile(__dirname + value, "utf8", (err, data) => {
        if (err) return callback(err);
        try {
           
            combineData[key] = JSON.parse(data);
           // console.log("dataSorted--->"+dataSorted)
        } catch (e) {
            return callback(e);
        }
        callback();
    });
}, err => {
    if (err) console.error(err.message);
 writeComibinedData(err,combineData);
});