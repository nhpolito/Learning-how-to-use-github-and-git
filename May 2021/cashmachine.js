const denominations = [["PENNY", 1], ["NICKEL", 5], ["DIME", 10], ["QUARTER", 25], ["ONE", 100], ["FIVE", 500], ["TEN", 1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]]

function checkCashRegister(price, cash, cid) {
  let index = denominations.length
    let returnAmount = ((cash * 1000) - (price * 1000)) / 10
    let cashOnHand = {}
    let cashToGive = {}
    cid.forEach(function (x) {
      cashOnHand[x[0]] = Math.round((x[1]*100))
    })
    while (index > 0) {
      index -= 1
      let changes = denominations[index]
      if (changes[1] - returnAmount < 0) {
        cashToGive[changes[0]] = 0
        while (cashOnHand[changes[0]] > 0 && returnAmount - changes[1] >= 0) {
          console.log(returnAmount, cashOnHand[changes[0]] )
          cashOnHand[changes[0]] -= changes[1]
          returnAmount -= changes[1]
          cashToGive[changes[0]] += changes[1]
        }
      }
    }
    if (returnAmount == 0) {
      let changeArray = []
      // Object.keys(cashToGive).map(function (x) {
      //   if (cashToGive[x] > 0) {
      //     changeArray.push([x, cashToGive[x] / 100])
      //   }
      // })
      Object.keys(cashToGive).map(function (x) {
          changeArray.push([x, cashToGive[x] / 100])
      })
      console.log(cashOnHand)
      if (Object.keys(cashOnHand).every(function (x) {
        return cashOnHand[x] == 0
      }) ) {
        return {status: "CLOSED", change: cid}
      }
      return {status: "OPEN", change: changeArray}
    }
  console.log(cashToGive)
    return {status: 'INSUFFICIENT_FUNDS', change: []}
  }

  let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]


let result =  checkCashRegister(19.5, 20, cid);
// console.log(denominations[0])
console.log(result)