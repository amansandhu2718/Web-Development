//command line: npm i minimist
//node 1.3_first_module_npm.js --name=AMANDEEP --number=3
let minimist = require("minimist");
let args = minimist(process.argv);

console.log(args.name);
console.log(args.number);
