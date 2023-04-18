function calcType(a, b, res) {
    let m = a*b;
    let d = a/b;
    let add = a+b;
    let sub = a-b;

    let end = res == m ? "multiplication" : res == d ? "division" : res == add ? "addition" : res == sub ? "subtraction" : "nothing"
    console.log(end)
    return end
  }

result = calcType(2,4,-2)

// describe("Sample tests", function(){
//     it("addition", function(){
//       Test.assertEquals(calcType(1,2,3),'addition'); 
//     });
//     it("multiplication", function(){
//       Test.assertEquals(calcType(10,4,40),'multiplication'); 
//     });
//     it("subtraction", function(){
//       Test.assertEquals(calcType(10,5,5),'subtraction'); 
//     });
//     it("division", function(){
//       Test.assertEquals(calcType(9,5,1.8),'division'); 
//     });
//   });