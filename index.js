// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
  let distance;
  if (blocks < 42){
  distance = (42 - blocks);
}
  else if (blocks > 42){
  distance = (blocks - 42);
}
  return distance;
}

function distanceFromHqInFeet(blocks){
let blockNum = distanceFromHqInBlocks(blocks);
let ftDistance = (blockNum * 264);
return ftDistance
}

function distanceTravelledInFeet(ablock, bblock){
let ftDistance;
if (ablock > bblock){
ftDistance = ((ablock - bblock)* 264);
}
else if (ablock < bblock){
ftDistance = ((bblock - ablock)* 264);
}
return ftDistance;
}

function calculatesFarePrice(ablock, bblock){
  let feet = distanceTravelledInFeet(ablock, bblock);
  let fare;
  if (feet < 400){
  fare = 0
}
  else if (feet > 400 && feet < 2000){
  fare = ((feet - 400)* .02 );
}
  else if (feet > 400 && feet < 2000){
  fare = ((feet - 400)* .02 );
}
  else if (feet > 2000 && feet < 2500){
  fare = 25;
}
  else if (feet > 2500){
  fare = 'cannot travel that far'
}
return fare
}
