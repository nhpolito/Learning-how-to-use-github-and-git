let x = ''

for (var i=0; i<7; i++) {
  x = x +"#"
  console.log(x)
}

total=0
arr=[]
for (var i=0; i<100; i++)  {
  total=total+1;
  arr.push(total);
  let div = total%3;
  let div5 = total%5;
  //console.log(div) 
  //console.log(total)
  if (div==0 && div5==0) {arr.pop(total); arr.push('FizzBuzz')}
  else if (div == 0) {arr.pop(total); arr.push('fizz')} 
  else if (div5 == 0 && div !==0) {arr.pop(total); arr.push('Buzz')}
   //('fizz')}
}
console.log(arr)

var name = ""
let elizabeth=['e','l','i','z','a','b','e','t','h']
for (let i=0; i<elizabeth.length; i++){
name = name + elizabeth[i];
}
console.log(elizabeth.length)
console.log(name)


var line=""
var char=""
var arr1=[]
for (var y=0; y<8; y++)
{ line=char+'\n';
  for(var z=0; z<8; z++)
  {
    char=char+"#";
    
  }
  
  //print=y
  console.log(line);
  char="";
  }


var inside=""
for(var zz=0;zz<7;zz++){
  inside="";
for (var ii=0;ii<8;ii++){
  inside=inside+"0"
}
console.log(inside)
}
console.log(inside)

console.log('hi'+'\n'+'you')



