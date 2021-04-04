function getResult(a,b,c){
  "use strict";
  const x = [];
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant > 0) {
        let squareRoot_1 = (- b + Math.sqrt(discriminant)) / (2 * a);
        let squareRoot_2 = (- b - Math.sqrt(discriminant)) / (2 * a);
        x.push(squareRoot_1, squareRoot_2);
     } else if (discriminant == 0) {
        let squareRoot_3 = - b / (2 * a);
        x.push(squareRoot_3);
     } else {
        return x;
     }

    return x;
}

function getAverageMark(marks){
  let averageMark = 0;
  sum = array => {
     let sum = 0
     array.forEach(function (value) {
         sum += value;
     });
     return sum
 }
 if (marks.length == 0) {
     return 0;
 } else if (marks.length <= 5) {
     averageMark = sum(marks) / marks.length
 } else {
     console.log("Всего оценок: " + marks.length);
     let sliceArray = marks.slice(0, 5);
     averageMark = sum(sliceArray) / sliceArray.length;
 }

  return averageMark;
}

function askDrink(name, dateOfBirthday){
  let result;
   if ((new Date().getFullYear() - dateOfBirthday.getFullYear()) > 18) {
       result = `Не желаете ли олд-фэшн, ${name}?`
   } else {
       result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
   }
   return result;
}
