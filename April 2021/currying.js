let dragon = 
  name =>
    size =>
      age =>
        name + size + age

let x = dragon('bigboy')
let y = x('bigggg')
let z = y(45)

console.log(z())