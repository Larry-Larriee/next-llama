let month = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

// dateConverter takes the string created by new Date() and returns the month and year in letter format
// date (string) the string created by new Date()
function dateConverter(date) {
  if (date.includes("/")) {
    let dateSplit = date.split("/");
    return `${month[dateSplit[0]]} ${dateSplit[2]}`;
  }

  // if the date is already converted leave as is
  return date;
}

module.exports = randomChar;
