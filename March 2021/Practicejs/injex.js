function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    console.log('n=' + n);
    console.log('arr[n-1]= ' + arr[n-1]);
    return multiply(arr, n - 1) * arr[n - 1];
// 1st step  ^this calls the function again with n-1  ^ this equals 
// 2nd step  ^this calls the fucntion again with n-1-1 ^ this equals
  }
}

console.log(multiply([3,4,5],3));

console.log(multiply([3,4,5],0));


function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    console.log('n=' + n);
    console.log('arr[n-1]= ' + arr[n-1]);
    return sum(arr, n - 1) + arr[n - 1];
// 1st step  ^this calls the function again with n-1  ^ this equals 
// 2nd step  ^this calls the fucntion again with n-1-1 ^ this equals
  }
}

console.log(sum([3,3,10],3))


function fact(n){
  if(n<=0){
    return 1;
  } else
  console.log('hi ' + n);
  return fact(n-1) * n;
}

console.log(fact(4))