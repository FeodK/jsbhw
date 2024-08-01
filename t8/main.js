let input = prompt("Введите число:");

function calculateSalary(number) {
    let tax = number * 0.13;
    console.log(`Размер заработной платы за вычетом налогов равен ${number - tax}`);
}

isNaN(input) ? console.log("Введено некорректное значение") : calculateSalary(input);
