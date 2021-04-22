//Задание 1
class PrintEditionItem {
      constructor (name, releaseDate, pagesCount) {
          this.name = name;
          this.releaseDate = releaseDate;
          this.pagesCount = pagesCount;
          this.state = 100;
          this.type = null;
      }
      fix() {
          this.state *= 1.5;
          }

      set state(count) {
                      if (count < 0) {
                                this._state = 0;
                      } else if (count > 100) {
                                this._state = 100;
                      } else {
                                this._state = count;
                      }
      }
    get state() {
      return this._state;
    }
}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
 constructor (author, name, releaseDate, pagesCount) {
  super(name, releaseDate, pagesCount);
  this.type = 'book';
  this.author = author;
}
}

class NovelBook extends Book {
  constructor (name, releaseDate, pagesCount, author) {
   super(name, releaseDate, pagesCount, author);
   this.type = 'novel';
 }
}

class FantasticBook extends Book {
  constructor (name, releaseDate, pagesCount, author) {
   super(name, releaseDate, pagesCount, author);
   this.type = 'fantastic';
 }
}

class DetectiveBook extends Book {
  constructor (name, releaseDate, pagesCount, author) {
   super(name, releaseDate, pagesCount, author);
   this.type = 'detective';
 }
}
//Задание 2
class Library {
  constructor(name) {
  this.name = name;
  this.books = [];
}
addBook(book) {
  if (book.state > 30) {
    this.books.push(book);
  }
}

findBookBy(type, value) {
  for (let i = 0; i < this.books.length; i++) {
    if (this.books[i][type] === value) {
      return this.books[i];
    }
  } return null;
}
giveBookByName(bookName) {
  for (let i = 0; i < this.books.length; i++) {
    if (this.books[i].name === bookName) {
      const result = this.books.splice(i, 1);
      return result[0];
    }
  } return null;
}
}

//Задание 3
class StudentLog {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	getName() {
		return this.name;
	}

	addGrade(grade, subject) {
		if (!this.marks[subject]) {
			this.marks[subject] = [];
        }
        if ( grade >= 1 & grade <= 5 ) {
        	this.marks[subject].push(grade);
        } else {
        	console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        }
        return this.marks[subject].length
	}

	getAverageBySubject(subject) {
		if (!this.marks[subject]) {
			return 0;
		} else {
			let sum = 0;
			let averageBySubject;
			for (let i = 0; i < this.marks[subject].length; i++) {
				sum += this.marks[subject][i];
			}
			averageBySubject = sum/this.marks[subject].length;
			return averageBySubject;
		}
	}

	getTotalAverage() {
		let sum = 0;
		let count = 0;

		for (let subj in this.marks ) {
			sum += this.getAverageBySubject(subj);
			count++;
		} 
		return sum / count;
	}
}
