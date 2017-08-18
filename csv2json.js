var express = require('express');
var app = express();
//var path = require('path');
var fs = require('fs');

app.listen(8765);

//var file = path.join(__dirname, 'CSV.csv');
//var f = fs.readFileSync(file, {encoding: 'utf-8'}, 
//    function(err){console.log(err);});
var csvfile = fs.readFileSync('CSV.csv').toString();

csvfile = csvfile.split("\n");

var column_header = csvfile.split(",");

var jsonarray = [];    
csvfile.forEach(function(part) {
    temp = {}
    row = part.split(",")
    for(var i = 0; i < column_header.length; i++){
        temp[column_header[i]] = row[i];
    }
    jsonarray.push(temp);
});

//var outPath = path.join(__dirname, 'JSON.json');
//fs.writeFileSync(outPath, JSON.stringify(json), 'utf8', 
//    function(err){console.log(err);});
fs.writeFileSync('JSON.json',JSON.stringify(jsonarray));