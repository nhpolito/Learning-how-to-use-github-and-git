function isVow(a){
  for (var i=0, l=a.length; i<l; ++i)
  {
    var char = String.fromCharCode(a[i])
    console.log(char)
    if ('aeiou'.indexOf(char) !== -1)
    a[i] = char;
  }
  
  return a;
}

console.log(isVow([132,104,107,101]))