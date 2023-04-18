function telephoneCheck(str) {
    
    let x= str.split("").filter(x => x == "-")
    if (x.length == 3) {
        return false
    }
    if (str[0] == "-" ) {
        return false
    }
    if (str.indexOf("(") == -1 && str.indexOf(")") > -1) {
        return false
    }
    let polishedPhone = str.replace(/-| |/g,"")
    console.log(polishedPhone.indexOf(")") - polishedPhone.indexOf("("))
    if (polishedPhone.indexOf(")") - polishedPhone.indexOf("(") > 4) {
        return false
    }
    let polishedPhone2 = polishedPhone
    if ( polishedPhone.indexOf("(") < polishedPhone.indexOf(")")) {
    polishedPhone2 = polishedPhone.replace(/\(|\)/g,"") }

    console.log(polishedPhone)
    console.log(polishedPhone2)
    if (polishedPhone.length === 10) {
        return true
    } else if (polishedPhone.length === 11 && polishedPhone[0] == 1) {
        return true
    } else if (polishedPhone2.length == 10) {
        return true
    } else if (polishedPhone2.length == 11 && polishedPhone2[0] == 1) {
        return true
    }
    return false;
  }
  
  let result = telephoneCheck("55 55-55-555-5");


  console.log(result)