function distanceFromHqInBlocks(block){
  if (block > 42) {
    return block - 42
  } else {
    return 42 - block
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, dest) {
  if (start > dest) {
    return (start - dest) * 264;
  } else {
    return (dest - start) * 264;
  }
}

function calculatesFarePrice(start, dest) {
  distance = distanceTravelledInFeet(start, dest);

  if (distance < 400) {
    return 0;
  } else if (distance >= 400 && distance <=2000) {
    return (distance-400) * 0.02
  } else if (distance > 2500) {
    return "cannot travel that far"
  } else if (distance > 2000) {
    return 25
  }
}
