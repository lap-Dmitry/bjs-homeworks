function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";
  let percentNumber = parseFloat(percent);
  let contributionNumber = parseFloat(contribution);
  let amountNumber = parseFloat(amount);
  if (isNaN(percentNumber)) {
          return `Параметр 'Процентная ставка' содержит неправильное значение "${percent}"`;
      } else if (isNaN(contributionNumber)) {
          return `Параметр 'Сумма первоначального взноса' содержит неправильное значение "${contribution}"`;
      } else if (isNaN(amountNumber)) {
          return `Параметр 'Сумма кредита' содержит неправильное значение "${amount}"`;
      } else {
  let credit = Number(amount) - Number(contribution);
  let monthNumber = (date.getFullYear() - new Date().getFullYear()) * 12;
  let P = (1 / 12) * (Number(percent) / 100);
  let payment = credit * (P + P / (Math.pow(1 + P, monthNumber) - 1));
  let totalAmount = payment * monthNumber;

  return Number(totalAmount.toFixed(2));
}
}

function getGreeting(name) {
    if(!name) {
    name = "Аноним";
    }

    const greeting = `Привет, мир! Меня зовут ${name}.`

    console.log(greeting);
    return greeting;
}
