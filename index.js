// Write your solution in this file!

const driver = {}
function updateDriverWithKeyAndValue(driver, key,value){
  let newDriver = {...driver}
  newDriver[key] = value
  return newDriver
}
