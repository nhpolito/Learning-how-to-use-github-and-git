function anagrams(word, words) {
  let arr1=[]
  x = word.split("").sort().join("")
  console.log(x)
  let y = words.map(function(x) {
  return x.split("").sort().join("")
  })
  console.log(y)
  for (let i=0; i<words.length; i++) {
    if (x == y[i]) {
      arr1.push(words[i])
    }
    
  }
  console.log(arr1)
}

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) 

//=> ['carer', 'racer']