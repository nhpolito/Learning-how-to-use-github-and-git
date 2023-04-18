function digitize(n) {
  //code here
  let x = n;
  str = x.toString()
  str = str.split("");
  console.log(str);
  let arr = [];
    for (let i=0; i<str.length; i++)  {
    arr.unshift(parseInt(str[i]))
    console.log(arr)
    }
  return arr
}

console.log(digitize(234239))

//348597 => [7,9,5,8,4,3]