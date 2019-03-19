// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
  let first = array.slice(0,2)
  return first;
}

const returnLastTwoDrivers = function(array){
  let first = array.slice(-2)
  return first;
}

const selectingDrivers =  [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function(fare){
  return function (value) {
    return fare * value;
  };
};