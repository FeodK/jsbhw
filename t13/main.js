// const randomArr = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));

const randomArr = [];

for (let i = 0; i < 5; i++) {
  randomArr.push(Math.floor(Math.random() * 10));
}

const sum = randomArr.reduce((acc, curr) => acc + curr, 0);
const minNum = Math.min(...randomArr);
const includesThree = randomArr.includes(3);

console.log("Сгенерированный массив:", randomArr);
console.log("Сумма элементов массива:", sum);
console.log("Минимальное число в массиве:", minNum);
console.log("Число 3 присутствует в массиве:", includesThree);

