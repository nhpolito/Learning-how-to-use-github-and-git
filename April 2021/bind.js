let c1 = {
  x: 5,
  y:10
}

let c2 = {
  x: 7,
  y: 20
}

function printCo () {
  console.log(this.x +',' + this.y)
}

let c1func = printCo.bind(c2)

c1func();