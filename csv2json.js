var express = require('express');
var app = express();
var fs = require('fs');

app.listen(8765);

var csvfile = fs.readFileSync('CSV.csv').toString();

csvfile = csvfile.split("\n");

var column_header = csvfile.shift().split(",");

var jsonarray = [];    
csvfile.forEach(function(part) {
    temp = {}
    row = part.split(",")
    for(var i = 0; i < column_header.length; i++) {
        temp[column_header[i]] = row[i];
    }
    jsonarray.push(temp);
});

fs.writeFileSync('JSON.json',JSON.stringify(jsonarray));