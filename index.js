// Code your solution in this file!
function distanceFromHqInBlocks(n) {
  let distance = Math.abs(42 - n);
  return distance;
}

function distanceFromHqInFeet(n) {
  return distanceFromHqInBlocks(n)*264;
}

function distanceTravelledInFeet(m, n) {
  let distance = Math.abs(n - m) * 264;
  return distance;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0
  }
  else if (distance >= 400 && distance <= 2000) {
    return (distance - 400) * 0.02
  }
  else if (distance > 2000 && distance <= 2500) {
    return 25
  }
  else {
    return "cannot travel that far"
  }
}
