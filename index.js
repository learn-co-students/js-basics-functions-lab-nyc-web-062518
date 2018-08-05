// Code your solution in this file!
function distanceFromHqInBlocks (num) {
  if (num > 42) {
    return num - 42
  }
  else if (42 > num) {
    return 42 - num
  }
  else {
    return 0
  }

}

function distanceFromHqInFeet (num) {
  return distanceFromHqInBlocks(num) * 264
}


function distanceTravelledInFeet(a, b) {
  switch(a>b) {
    case true:
    return (a - b) * 264;
    break;
    case false:
    return (b - a) * 264;
    break;
  }
}

function calculatesFarePrice(a, b) {
  let dist = distanceTravelledInFeet(a, b)

  switch(true) {
    case dist < 400:
    return 0;
    break;

    case dist > 400 && dist < 2000:
    return (dist - 400) * .02;
    break;

    case dist > 2000 && dist < 2500:
    return 25;
    break;

    case dist > 2500:
    return "cannot travel that far";
    break;

  }
}
