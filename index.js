// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}


function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264
}


function calculatesFarePrice(start, end) {
  d = distanceTravelledInFeet(start, end) - 400
  if (d > 2100) {
    return 'cannot travel that far'
  } else if (d > 1600) {
    price = 25
  } else if (d > 0) {
    price = d * 0.02
  } else {
    price = 0
  }
  return price
}
