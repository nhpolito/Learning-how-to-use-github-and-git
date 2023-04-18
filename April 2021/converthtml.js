function convertHTML(str) {
  let x=str.split("")
  console.log(x)
  for (let i = 0; i < x.length; i++) {
    x[i] == "&" ? x[i] = '&amp;' : 
      x[i] == "<" ? x[i] = '&lt;' : 
        x[i] == ">" ? x[i] = '&gt;' : 
          x[i] == '"' ? x[i] = '&quot;' : 
          x[i] == "'" ? x[i] = '&apos;' : x[i] = x[i]
  }
  console.log(x)
  return x.join("");
}

let result = convertHTML('Stuff in "quotation marks"');
console.log(result)