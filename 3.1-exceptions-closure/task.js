//Задание 1
function parseCount(count) {
  const number = Number.parseInt(count, 10);
    if (number) {
        return number;
    }
    throw new Error("Невалидное значение");
}

function validateCount(count) {
    try {
        return parseCount(count);
    }
    catch(error) {
        return error;
    }
}
//Задание 2
class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

    getPerimeter() {
        if (this.a && this.b && this.c) {
            return this.a + this.b + this.c;
        } else {
            return 'Ошибка! Треугольник не существует';
        }
    }

    getArea() {
        if (this.a && this.b && this.c) {
            const hP = this.getPerimeter() * 0.5;
            return Number(Math.sqrt(hP * (hP - this.a) * (hP - this.b) * (hP - this.c)).toFixed(3));
        } else {
            return 'Ошибка! Треугольник не существует';
        }
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return new Triangle(0, 0, 0);
    }
}
