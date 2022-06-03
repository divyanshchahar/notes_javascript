// 2 arguments, multiple returns
isDivisible1 = (param1, param2) => {
  if (param1 % param2 === 0) {
    return true;
  } else {
    return false;
  }
};

// 2 arguments, single return
isDivisible2 = (param1, param2) => {
  return param1 % param2 === 0;
};

// 2 arguments, no retuen, but still returns a boolean
isDivisible3 = (param1, param2) => param1 % param2 == 0;

// single argument, no return
isEven = param1 => param1 % 2 === 0;

console.log(isDivisible1(6, 3)); // => true
console.log(isDivisible2(6, 3)); // => true
console.log(isDivisible3(5, 9)); // => false
console.log(isEven(3)); // => false
