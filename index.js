// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(42 - street)
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  let result
  if (distanceTravelledInFeet(start, end) >= 2500) {
    result = "cannot travel that far"
  } else if (distanceTravelledInFeet(start, end) < 400) {
    result = 0
  } else if (distanceTravelledInFeet(start, end) >= 400 && distanceTravelledInFeet(start, end) <= 2000) {
    result = (distanceTravelledInFeet(start, end) - 400) * 0.02
  } else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) <= 2500) {
    result = 25
  }
  return result
}
