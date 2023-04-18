function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let keys = Object.keys(source);
  let newarr = collection.filter(function(propacc) {
    for (let i of keys) {
      console.log(i)
      console.log(propacc)
      if (propacc[i] !== source[i]) {
        return false
      };
    } return true
  });
  console.log(newarr);
  return newarr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });