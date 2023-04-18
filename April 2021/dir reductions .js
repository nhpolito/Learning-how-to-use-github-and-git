function dirReduc(arr){
  let newarr = []
 let north = arr.filter(x=> x == "NORTH") 
 let south = arr.filter(x=> x == "SOUTH") 
 let east = arr.filter(x=> x == "EAST") 
 let west = arr.filter(x=> x == "WEST") 
 let ewl= east.length + west.length
 let nsl= north.length + south.length
 let totaldiff = ewl-nsl
 console.log(nsl)
 console.log(ewl)
 console.log(north,south,east,west) 
 console.log(totaldiff)
 let ns = north.length-south.length
 let ew = west.length-east.length
 if ((ns == 0 & ew == 0) && totaldiff == 0) {
   return arr
  }
// North and South
 if (ns > 0) {
   for (let i = 0; i < ns; i++)  {
   newarr.push("NORTH") 
   }
  }
 if (ns < 0) {
   for (let i = 0; i < Math.abs(ns); i++){
     newarr.push("SOUTH")
  }
  }
// East and West
if (ew > 0) {
  for (let i = 0; i < ew; i++)  {
  newarr.push("WEST") 
  }
 }
if (ew < 0) {
  for (let i = 0; i < Math.abs(ew); i++){
    newarr.push("EAST")
 }
 }
  return newarr.reverse
}


console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))