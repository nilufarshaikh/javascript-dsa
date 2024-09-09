const map = (arr, fn) => {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray[i] = fn(arr[i], i);
  }

  return newArray;
};

const arr = [1, 2, 3];
const fn = function plusone(n) {
  return n + 1;
};
const newArray = map(arr, fn);
console.log(newArray);
