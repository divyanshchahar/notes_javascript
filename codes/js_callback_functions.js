// simple function, accepts no parameters, returns no value
myCallbBack1 = () => {
  console.log("Callback function called");
  console.log("");
};

// accepts parameters, returns no value
myCallBack2 = (x, y) => {
  z = x + y;
  console.log(z);
  console.log("");
};

// accepts parameters and returns value
myCallback3 = (x, y) => {
  z = x * y;
  return z;
};

myFunction1 = (callback) => {
  console.log("Function 1 called");

  callback(); // calling myCallbBack1 via its refrence i.e. using callback
};

myFunction2 = (x, y, callback) => {
  console.log("Adding ", x, "and ", y);

  myCallBack2(x, y); // calling myCallbBack2 via its refrence and passing the value of x and y
};

myFunction3 = (x, y, callback) => {
  z = callback(x, y); // calling myCallbBack3 via its refrence and passing the value of x and y and acceptimg the value of z
  console.log(x, "times ", y, "is", z);
  console.log("");
};

myFunction1(myCallbBack1); // => Function 1 called
//                               Callback function called

myFunction2(2, 3, myCallBack2); // => Adding  2 and  3
//                                    5

myFunction3(3, 5, myCallback3); // => 3 times  5 is 15
