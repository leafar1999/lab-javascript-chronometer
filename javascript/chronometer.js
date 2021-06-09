class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliIntervalId = 0;
    this.milliCurrentTime = 0;
    this.milliseconds = 0;
  }
}
Chronometer.prototype.start = function () {
  let that = this;
  this.intervalId = setInterval(function () {
    that.currentTime++;
    that.setTime();
    printTime(that.minutes, that.seconds, that.milliseconds);
  }, 1000);

  this.milliIntervalId = setInterval(function () {
    that.milliCurrentTime++;
    that.milliseconds = that.computeTwoDigitNumber(that.setMilliseconds());
    printMilliseconds(that.milliseconds);
    if (that.milliseconds === 99) that.milliseconds = 0;
  }, 10);
};

Chronometer.prototype.getMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.getSeconds = function () {
  return Math.floor(this.currentTime - this.getMinutes(this.currentTime) * 60);
};

Chronometer.prototype.computeTwoDigitNumber = function (number) {
  return number.toString().length === 1 ? `0${number}` : number.toString();
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.computeTwoDigitNumber(this.getMinutes());
  this.seconds = this.computeTwoDigitNumber(this.getSeconds());
};

Chronometer.prototype.setMilliseconds = function () {
  return this.milliCurrentTime.toString().slice(-2);
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
  clearInterval(this.milliIntervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  printTime('00', '00');
  printMilliseconds('00');
};

Chronometer.prototype.splitClick = function () {
  let time = `${this.minutes}:${this.seconds}:${this.milliseconds}`;
  printSplit(time);
};

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
