function humanYearsCatYearsDogYears (humanYears) {
  const arr = [] ;
  let catyears = 0;
  let dogyears = 0;
    if (humanYears == 1) {
    catyears = 15;
    dogyears = 15;
    } else if (humanYears == 2) {
    catyears = 24;
    dogyears = 24;
    } else if (humanYears >= 3) {
    catyears = 24 + (humanYears-2)*4;
    dogyears = 24 + (humanYears-2)*5;
    } 
  console.log(catyears);
  arr.push(humanYears);
  arr.push(catyears);
  arr.push(dogyears);
  return arr;
}
console.log(humanYearsCatYearsDogYears(10))