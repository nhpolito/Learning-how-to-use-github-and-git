function sortAndStar(stringArray) {
  const sorted = stringArray.sort(); // the default sort function works
  return sorted[0] // take first element
  .split("") // split string into chars
  .join(""); // join chars with ***
}

console.log(sortAndStar(['hel1o', 'you', 'legend']))