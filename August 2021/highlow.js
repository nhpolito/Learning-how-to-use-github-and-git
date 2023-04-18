function highAndLow(numbers){
    arr = []
    let x = numbers.split(" ").map(x => parseInt(x))
    x.sort((x,b) => b - x)
    console.log(x)
    arr.push(x[0]);
    arr.push(x[x.length-1]);
    console.log(arr)
    let arr2 = arr.map(x=> x.toString())
    console.log(arr2)
    return `${arr2[0]} ${arr2[1]} `
  }

 let result = highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
 console.log(typeof(result))
 