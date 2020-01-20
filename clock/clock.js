export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  timeGetter() {
    let totalMins = (this.hours * 60) + this.minutes
    let revisedMins = 0;
    let hours = 0;
    let minutes = 0;

    if (totalMins < 0) {
      if (Math.abs(totalMins) >= 1440) {
        revisedMins = 1440 - (Math.abs(totalMins) % 1440);
      } else {
        revisedMins = 1440 - (Math.abs(totalMins));
      }
    } else {
      if (totalMins >= 1440) {
        revisedMins = totalMins % 1440;
      } else {
        revisedMins = totalMins;
      }
    }

    hours = Math.floor(revisedMins / 60);
    minutes = revisedMins % 60;

    return [hours, minutes];
  }

  toString() {
    let time = this.timeGetter();
    return (time[0] >= 10 ? '' : '0') + (time[0]) + ':' + (time[1] >= 10 ? '' : '0') + time[1];
  }

  plus(minutesToAdd) {
    this.minutes += minutesToAdd;
    return this.toString();
  }

  minus(minutesToSubtract) {
    this.minutes -= minutesToSubtract;
    return this.toString();
  }

  equals(clock) {
    let firstClock = this.timeGetter();
    let secondClock = clock.timeGetter();

    if ((firstClock[0] === secondClock[0]) && (firstClock[1] === secondClock[1])) {
      return true;
    } else {
      return false;
    }
  }
}