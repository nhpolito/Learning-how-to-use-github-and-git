function pyramid(balls) {
  let count = 0;
  let ballsPerRow = 0;
  
  for(let x=0; x<balls; x++) {
    count++;
    console.log(count)
    ballsPerRow = ballsPerRow + count;
    if(ballsPerRow == balls) {
      return count;
    }
    if(balls < ballsPerRow) {
      return count - 1;
    }
  }
}
console.log(pyramid(4))

