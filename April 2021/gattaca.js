function pairElement(str) {
  let newarr = [];
  let x = str.split("");
  newarr = x.slice(0)
  console.log(x);
  console.log(newarr)
  let counter = 0;
  for (let i = 0; i<str.length; i++) {
    console.log(x[i]);
    if(x[i] == "G") {
      newarr.splice(i+1+counter,0,"C")
      counter++
    }
    if(x[i] == "C") {
      newarr.splice(i+1+counter,0,"G")
      counter++
    }
    if(x[i] == "A") {
      newarr.splice(i+1+counter,0,"T")
      counter++
    }
    if(x[i] == "T") {
      newarr.splice(i+1+counter,0,"A")
      counter++
    }
  }
  console.log(x)
  console.log(newarr)
  let final = chunk(newarr,2)
  console.log(final)
  return(final)
}

function chunk (myarray, size) {
  let final = []
  for (let i=0; i<myarray.length; i += size) {
  final.push(myarray.slice(i,i+size))
  }
  //console.log(final)
  return final
}


pairElement("GCG");

