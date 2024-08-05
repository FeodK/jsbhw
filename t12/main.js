const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr = arr.slice(0, 3).concat(arr.slice(5));

/* const newArr = [];

for (let i = 0; i < arr.length; i++) {
  const el = arr[i];

  if (el === 4 || el === 5) {
    continue;
  }

  newArr.push(el);
} */

console.log(newArr);
