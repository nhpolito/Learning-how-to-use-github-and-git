function spinalCase(str) {
  let spacer = str.replace(/([a-z])([A-Z])/g,"$1 $2")
  let final = spacer.replace(/\s|_/g,"-")
  console.log(final)
  return final.toLowerCase()
}

spinalCase('ThisIsSpinalTap');