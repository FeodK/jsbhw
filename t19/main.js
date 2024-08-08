const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const mergedObj = {};

for (let i = 0; i < en.length; i++) {
    mergedObj[en[i]] = ru[i];
}

console.log(mergedObj);
