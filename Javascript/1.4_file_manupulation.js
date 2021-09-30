//commandline: node 1.4_file_manupulation.js
const fs = require("fs");
let a = "your data....";
fs.writeFileSync("file1.txt", a, "utf-8"); //write file
console.log("file 1 created");

let b = fs.readFileSync("file1.txt", "utf-8"); //readfile

fs.appendFileSync("file2.txt", b);
console.log("created and appended in file 2");
