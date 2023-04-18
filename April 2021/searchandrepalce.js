function myReplace(str, before, after) {
  after = after.toLowerCase()
 if (before[0] == before[0].toUpperCase()) {
   after = after[0].toUpperCase() + after.slice(1)
 } 
 let x = str.replace(before, after)
return x
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

