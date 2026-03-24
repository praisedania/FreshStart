//fs module
//importing fs module
const fs = require('fs');
fs.readFile('learning.js',(err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});


//path module
// importing path module
const path = require('path');

//process.cwd
console.log(process.cwd())

//glob
const glob = require("glob");

glob("*.js", (err, files) => {
  console.log(files);
});



