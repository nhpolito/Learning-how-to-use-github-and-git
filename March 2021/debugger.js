function zeroArray(m, n) {
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    console.log(newArray);
    newArray.push(row);
    for (let j = 0; j < n; j++) {
      row.push(0);
      
    console.log(row)
    }
  }
  return newArray;
}
let matrix = zeroArray(2, 2);

console.log(matrix)

//console.log(matrix);