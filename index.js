// Code your solution in this file.

// function lowerCaseDrivers(array) {
//   return array.map(driver => driver.toLowerCase())
// }


// to refactor
const lowerCaseDrivers(array) = array.map(driver => driver.toLowerCase())



function nameToAttributes(array) {
  return array.map(function (driver) {
    let newDriver = driver.split(" ");
    return Object.assign({}, {firstName: newDriver[0]}, {lastName: newDriver[1]});
  })
}

function attributesToPhrase(array) {
  return array.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}