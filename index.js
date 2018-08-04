function distanceFromHqInBlocks(pickupLocation) {
  let distanceInBlocks;
  if (pickupLocation > 42) {
    distanceInBlocks = pickupLocation - 42
  } else {
    distanceInBlocks = 42 - pickupLocation
  }
  return distanceInBlocks;
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
  let fare;
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    fare = 0;
  } else if (distance > 400 && distance <= 2000) {
    fare = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    fare = 25;
  } else if (distance > 2500){
    fare = 'cannot travel that far';
  }
  return fare;
}
