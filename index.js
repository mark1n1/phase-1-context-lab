/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(record) {
  return record.map(createEmployeeRecord);
}

function createTimeInEvent(date) {
  let dateArray = date.split(' ');
  let dateIn = dateArray[0];
  let hourIn = parseInt(dateArray[1].slice(0,2) + "00");

  let object = {
    type: "TimeIn",
    hour: hourIn,
    date: dateIn
  };

  this.timeInEvents.push(object);
  return this;
}

function createTimeOutEvent(date) {
  let dateArray = date.split(' ');
  let dateOut = dateArray[0];
  let hourOut = parseInt(dateArray[1].slice(0, 2) + "00");

  let object = {
    type: "TimeOut",
    hour: hourOut,
    date: dateOut
  }

  this.timeOutEvents.push(object);

  return this;
}

function hoursWorkedOnDate(date) {
  let hourIn = this.timeInEvents.find((day) => date === day.date);
  let hourOut = this.timeOutEvents.find((day) => date === day.date);

  return ((hourOut.hour - hourIn.hour) / 100);
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(source, firstName) {
  return source.find((record) => record.firstName === firstName);
}

function calculatePayroll(records) {
  const payroll = records.reduce((acc, record) => {
    return acc + allWagesFor.call(record);
  }, 0);

  return payroll;
}
