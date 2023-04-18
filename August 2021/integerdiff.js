const intDiff = (arr, n) => {
    let count = 0;
    for(let i=1; i<arr.length; i++) { 
        console.log(`index of I = ${i}`)
        console.log(`value of array at I ${arr[i]}`)
      for(let j=0; j<i; j++)  {
          console.log(`Index of J = ${j}`)
          console.log(`value of array at J ${arr[j]}`)
          console.log(`diferrence of value between = ${arr[i]-arr[j]}`)
          if (Math.abs(arr[i]-arr[j]) === n) count++;
        //   console.log(count)
      }   
    }
    return count;
  }


  let result = intDiff([1, 1, 3, 3], 2)
//   [1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
// [1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)