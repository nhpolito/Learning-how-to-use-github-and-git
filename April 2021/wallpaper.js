function wallpaper(l, w, h) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
  if (l == 0 || w==0 || h == 0) {
    return numbers[0]
  }
  let wallsarea = ((2*((l*w)+(l*h)+(w*h)))-(2*(l*w)))*1.15
  console.log(wallsarea)
  let rollarea = .52*10
  console.log(rollarea)
  let needed = wallsarea/rollarea
  let minrolls = Math.ceil(needed)
  console.log(minrolls)
  return numbers[minrolls]
}
console.log(wallpaper(6.3, 5.8, 3.13))