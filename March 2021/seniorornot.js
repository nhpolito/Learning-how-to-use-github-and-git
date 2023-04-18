function openOrSenior(data){ 
  // ...
  let arr = []
  for (let i=0; i<data.length; i++) {
    //console.log('i ' + i)
    for (let x=0; x<data[i].length; x++) {
    //console.log('x ' + x);
    //console.log(data[i][0])
    }
    if (data[i][0] >= 55 && data[i][1] > 7) {
      arr.push('Senior')
      } else arr.push('Open')
    
  }
  return arr
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))