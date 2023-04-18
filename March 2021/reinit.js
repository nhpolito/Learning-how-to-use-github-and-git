function zeroArray(m, n) {
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    newArray.push(row);
    console.log(newArray);
  }
    for (let j = 0; j < n; j++) {
      row.push(0);
      console.log(`row = ${row}`)
    }
    console.log(newArray)
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);