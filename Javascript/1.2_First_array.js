//commandline: node 1.2_First_array.js
let arr = [];
for (let i = 0; i < 10; i++) {
  //getting values
  arr.push(i);
  //arr[i]=i; also works
}

for (let j = 0; j < arr.length; j++) {
  // prints values of array one by one
  console.log(arr[j]);
}
console.log(arr); //prints array
