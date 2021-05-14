class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }
  addClock(time, callback, id) {
    if (!id) {
      throw new Error(
        `Невозможно идентифицировать будильник. Параметр id не передан.`
      );
    }
    if (this.alarmCollection.some((x) => x.id === id)) {
      console.error(`Будильник с таким id уже существует.`);
    } else {
      this.alarmCollection.push({ id, time, callback });
    }
  }
  removeClock(id) {
    this.alarmCollection = this.alarmCollection.filter((x, i) => x.id !== id);
    if (this.alarmCollection.filter((x, i) => x.id === id)[0]) {
      return true;
    }
    return false;
  }
  getCurrentFormattedTime() {
    const time = new Date();
    return `${("0" + time.getHours()).slice(-2)}:${(
      "0" + time.getMinutes()
    ).slice(-2)}`;
  }
  start() {
    const time = this.getCurrentFormattedTime;
    function checkClock(alarm) {
      const newTime = time();
      if (newTime === alarm.time) {
        alarm.callback();
      }
    }
    if (this.timerId === null) {
      const alarm = this.alarmCollection;

      this.timerId = setInterval(() => {
        alarm.forEach((x) => checkClock(x));
      });
    }
  }
  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
  printAlarms() {
    console.log(
      `Печать всех будильников в количестве: ${this.alarmCollection.length}`
    );
    this.alarmCollection.forEach((x) =>
      console.log(`Будильник №${x.id} заведен на время ${x.time}`)
    );
  }
  clearAlarms() {
    clearInterval(this.timerId);
    this.alarmCollection = [];
  }
}

function testCase() {
  const alarm = new AlarmClock();
  alarm.addClock(
    `${("0" + new Date().getHours()).slice(-2)}:${(
      "0" + new Date().getMinutes()
    ).slice(-2)}`,
    () => console.log("Пора вставать!"),
    1
  );
  alarm.addClock(
    `${("0" + new Date().getHours()).slice(-2)}:${(
      "0" +
      (new Date().getMinutes() + 1)
    ).slice(-2)}`,
    () => {
      console.log("Вставай! Больше будить не буду!");
      alarm.removeClock(2);
    },
    2
  );
  alarm.addClock(
    `${("0" + new Date().getHours()).slice(-2)}:${(
      "0" +
      (new Date().getMinutes() + 2)
    ).slice(-2)}`,
    () => {
      console.log("Я предупреждал! Выключаюсь!");
      alarm.clearAlarms();
      alarm.printAlarms();
    },
    3
  );
  alarm.printAlarms();
  alarm.start();
}
