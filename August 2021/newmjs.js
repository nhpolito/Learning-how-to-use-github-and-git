function nbYear(p0, percent, aug, p) {
    let newarr = []
    newarr.push(p0)
    console.log(newarr)
    for (let i = 1; i < p; i++) {
        console.log(i)
        console.log(newarr.length)
    let x = newarr[newarr.length-1] + (newarr[newarr.length-1] * (percent/100)) + aug 
    newarr.push(x)
    console.log(newarr)
    if (newarr[newarr.length-1] > p) {
        return(i)
    }
    }
  
}


let result = nbYear(1500, 5, 100, 5000)
// , 15)

console.log(result)

//At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants