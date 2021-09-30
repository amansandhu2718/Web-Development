//commandline: 1.1_first_function.js 50
let args = process.argv;
let n = parseInt(args[2]);
for (let j = 2; j <= n; j++) {
  let isprime = Isprime(j);
  if (isprime == true) {
    console.log(j + "prime");
  }
}

function Isprime(n) {
  //function definition
  let isprime = true;

  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      isprime = false;
      break;
    }
  }
  return isprime;
}
