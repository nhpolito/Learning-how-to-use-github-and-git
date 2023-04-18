function correctTail(body, tail) {
  
 let sub = body.substr((body.length-tail.length))
  if (sub == tail) {
  return true
  } else return false
}
  
console.log(correctTail('foxy', 'x'))