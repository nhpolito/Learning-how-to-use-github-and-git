function findLongest(str) {
  
  var spl = str.split(" ");
  console.log(spl)
  var longest = 0
  
  for (var i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
      longest = spl[i].length
      }
  }
    return longest
}

const findLongest = input => Math.max(...input.split(" ").map(i => i.length));

console.log(findLongest('fuck you hoe ass biiiiizzzzy'))


