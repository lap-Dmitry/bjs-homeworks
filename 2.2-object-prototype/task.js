//Задание
String.prototype.isPalindrome = function (str) {
    str = this.toLowerCase();
    console.log(str);
    let newString = str.split('');
    newString.forEach((word) => {
        if (word === ' ') {
          newString.splice(newString.indexOf(' '),1);
        }
      });
    newString = newString.join();
    let strReverse = newString.split('').reverse().join('');

    if (newString === strReverse) { return true } else { return false };
}

//Задание 2
function getAverageMark(marks) {
  if (marks.length === 0) {return 0}
  else {
      let sum = marks.reduce((ball, a) => {
      return ball + a;
      });
      let average = sum / marks.length;
      let averageMark = Math.round(average);
      return averageMark
  };
}

//Задание 3
function checkBirthday(birthdayStr) {
  let msPerDay = 1000 * 60 * 60 * 24;
  let msPerYear = msPerDay * 365;

  let now = Date.now();
  let birthdayDate = new Date(birthdayStr);
  let birthday = +birthdayDate;

  let nowYear = (new Date()).getFullYear();
  let bdayYear = birthdayDate.getFullYear();
  let leapYears = 0;
  for (let year = bdayYear; year < nowYear; year++) {
    if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
      leapYears++;
    }
  }

  let diff = now - birthday;
  let diffWithoutLeapDays = diff - leapYears * msPerDay;
  let age = Math.trunc(diffWithoutLeapDays / msPerYear);

  return age >= 18;
}
