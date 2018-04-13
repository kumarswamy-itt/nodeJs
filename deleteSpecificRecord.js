var fs = require('fs')
fs.readFile('outputData.txt', 'utf8', function(err, data)
{
    if (err)
    {
       console.log("!!!Error reading file");
    }

    res.writeHead(200,{
        'Content-Type': 'tex/plain'
    });

    var updatedData = data.split('\n').slice(1).join('\n');
    fs.writeFile('outputData.txt', updatedData,(error) => 
    {  console.log("!!!Error updating file");
    });

    
});