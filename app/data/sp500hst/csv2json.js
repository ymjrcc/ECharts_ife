const csvFilePath = './sp500hst_part.csv'
const csv = require('csvtojson');
const fs = require('fs');

fs.writeFile('sp500hst.json',"[",{flag:'a'});

var success = false;

csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    fs.writeFileSync('sp500hst.json',JSON.stringify(jsonObj),{flag:'a'},function(){success=true});
	fs.writeFileSync('sp500hst.json',",",{flag:'a'},function(){success=false});
	// combine csv header row and csv line to a json object
	// jsonObj.a ==> 1 or 4
})
.on('done',(error)=>{
	fs.writeFile('sp500hst.json',"]",{flag:'a'});
	console.log('end');
})