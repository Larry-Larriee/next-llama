const numberObject = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  "final-challenge": "Five",
};

// number (string): the number to convert to word form. for example, 1
// return (string): the number in word form
function UseNumberConversion(number) {
  return numberObject[number];
}

export default UseNumberConversion;
