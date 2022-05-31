function myFunction(x, y) {
  z = x + y;
  return z;
}

a = myFunction(5, 10);
console.log(a); // => 15

mySum = myFunction; // object of type function
b = mySum(20, 30);
console.log(typeof mySum); // => function
console.log(b); // => 50
