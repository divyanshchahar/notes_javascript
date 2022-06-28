newArr = [1, 2, 3].forEach((newArrElement, newArrIndex, returnArr) => {
  console.log(newArrElement + " ," + newArrIndex + " ,", returnArr);
});

console.log(newArr); // => undefined
