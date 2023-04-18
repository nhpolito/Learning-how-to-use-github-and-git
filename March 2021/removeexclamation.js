function removeExclamationMarks(s) {
  for (let i of s)  {
  //console.log(i);
    if (i == '!')  {
    s = s.replace(i,"");
    //console.log(i);
    //console.log(s);
    }  
    //console.log(s);
  }
  return s;
  
}

console.log(removeExclamationMarks('Fu!!!!!'))