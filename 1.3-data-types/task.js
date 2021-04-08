function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";
  let credit = Number(amount) - Number(contribution);
  let monthNumber = (date.getFullYear() - new Date().getFullYear()) * 12;
  let P = (1 / 12) * (Number(percent) / 100);
  let payment = credit * (P + P / (Math.pow(1 + P, monthNumber) - 1));
  let totalAmount = payment * monthNumber;

  return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
  let greeting = "";

    if (!name) {
        name = "Аноним";
    }

    greeting = `Привет, мир! Меня зовут ${name}.`

    console.log(greeting);
    return greeting;
}
