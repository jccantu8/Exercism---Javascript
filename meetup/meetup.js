export const meetupDay = (year, month, dayOfWeek, whichDay) =>  {
  let DAYS = {'Sunday' : 0, 'Monday' : 1, 'Tuesday' : 2, 'Wednesday' : 3, 'Thursday' : 4, 'Friday' : 5, 'Saturday' : 6}
  let startdate = new Date(year, month, 1)
  let enddate = new Date(year, month + 1, 1)
  
  let newdate = startdate
  let i = 1
  let counter = 1
  let dateArr = []
  while (newdate < enddate) {
    if(newdate.getDay() === DAYS[dayOfWeek]) {
      dateArr.push([counter, newdate.getDate()])
      counter++
    }
    i++
    newdate = new Date(year, month, i)
  }

  let DAYTYPES = {'1st' : 1, '2nd' : 2, '3rd' : 3, '4th' : 4, '5th' : 5, 'last' : dateArr.length, 
  'teenth' : dateArr.find( (e) => {
    return ((e[1] >= 13) && (e[1] <= 19))
    })[0]}

  if (counter < DAYTYPES[whichDay]) {
    throw new error(`There was no ${whichDay} day.`)
  }

  return new Date(year, month, dateArr[DAYTYPES[whichDay] - 1][1])
}