function findMaxNumber(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

let maxNumber = findMaxNumber(
  prompt("Введите первое число:"),
  prompt("Введите второе число:"),
  prompt("Введите третье число:")
);

alert(`Максимальное значение: ${maxNumber}`);
