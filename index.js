const moment = require('moment');

const getCurrentDate = () => {
  return moment(new Date());
}

const getTargetDate = () => {
  const lastBirthday = moment().format('2019-05-25 hh:mm:ss');
  const numYears = 62 - 31;
  return moment(lastBirthday).add(numYears, 'year');
}

class DateDifference {
  constructor() {
    this.duration = moment.duration(getTargetDate().diff(getCurrentDate()));
    this.durationString = '';
  }

  buildString() {
    this.years().months().days().hours().minutes();
    this.durationString += 'until retirement!'
  }

  years() {
    this.durationString += this.duration.years() + ' years, ';
    return this;
  }

  months() {
    this.durationString += this.duration.months() + ' months, ';
    return this;
  }

  days() {
    this.durationString += this.duration.days() + ' days, ';
    return this;
  }

  hours() {
    this.durationString += this.duration.hours() + ' hours, ';
    return this;
  }

  minutes() {
    this.durationString += this.duration.minutes() + ' minutes ';
    return this;
  }

  display() {
    this.buildString();
    return this.durationString;
  }
}

const getDuration = () => {
  return new DateDifference().display();
}

console.log(getDuration());