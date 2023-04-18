function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let results = []
  arr.forEach(function(x) {
    let twoPie = Math.PI*2;
    let earthRadAltitude = earthRadius + x.avgAlt
    let numerator = earthRadAltitude * 
                    earthRadAltitude * 
                    earthRadAltitude ;           
    let numtoSquare =  numerator / GM
    let squaredResult = Math.sqrt(numtoSquare);
    let finalNum = squaredResult * twoPie
    console.log(finalNum)
    let newob = {}
    newob.name = x.name
    newob.orbitalPeriod = Math.round(finalNum)
    results.push(newob)
  })
  return results;
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));

