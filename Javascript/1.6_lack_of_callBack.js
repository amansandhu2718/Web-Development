// task 1
const minimist = require("minimist");
let args = minimist(process.argv);
let fs = require("fs");

let t1 = Date.now();
console.log(t1 % 100000);
let arrPrime = [];
for (let i = 2; i < args.m; i++) {
  let isprime = Isprime(i);
  if (isprime == true) {
    arrPrime[i] = i;
  }
}

function Isprime(n) {
  let isprime = true;
  for (let i = 2; i * i <= n; i++) {
    if (i % n == 0) {
      isprime = false;
      break;
    }
  }
  return isprime;
}
let t2 = Date.now();
console.log(t2 % 100000);
console.log(t2 - t1 + "ms Time is taken by Task 1");
// task 1 ended

// task2

let t3 = Date.now();
console.log(t3 % 100000);
let dataOfFile = [];
for (let i = 0; i < args.n; i++) {
  dataOfFile.push(i);
}
let str = dataOfFile.join("\n");
fs.writeFileSync("file1.txt", str);
fs.appendFileSync("file1.txt",str);
fs.appendFileSync("file1.txt",str);
fs.appendFileSync("file1.txt",str);
let t4 = Date.now();
console.log(t4 % 100000);
console.log(t4 - t3 + "ms Time is taken by Task 2");
//task2 ended
