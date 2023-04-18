const people = [
    { id: "1", name: "Nick", age: 23},
    { id: "2", name: "Carson", age: 23},
    { id: "3", name: "Justin", age: 24},
    { id: "4", name: "Justin", age: 23},
]

let result


result = people.reduce( (acc, cv) => acc+1, 0)

result = people.reduce( (acc, cv) => acc + cv.age, 0)

result = people.reduce( (acc, cv) => [...acc, cv.name], [])

result = people.reduce( (acc,cv) => {
    return {...acc, [cv.id]: cv }
}, {})

result = people.reduce( (acc, cv) => { 
    if ( acc == null || acc < cv.age) { 
        acc = cv.age } 
        return acc
}, null)

result = people.reduce ( (acc, cv) => {
  if (acc == !null) {
    return acc    
  }
  if (cv.name == "Justin") {
    return cv
  }
}, null)

console.log(result)