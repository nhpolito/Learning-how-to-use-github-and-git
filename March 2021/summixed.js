function sumMix(x){
let total = x.reduce((a,b) => a + parseInt(b),0)
return total
}


console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))

//41