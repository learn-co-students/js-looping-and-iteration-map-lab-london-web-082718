// Code your solution in this file.

function lowerCaseDrivers(drivers) {
    const newArray = []
	drivers.map(driver => { 
        newArray.push(driver.toLowerCase())
    })
	return newArray;
}


function nameToAttributes(drivers) {
    const changed = drivers.map(driver =>{
        const array = driver.split(" ")
        return Object.assign({}, { firstName: array[0], lastName: array[1] })
    })
    return changed 
}

// function nameToAttributes(list) {
//     return list.map(function(driver) {
//       const driverFirst = driver.split(' ')[0];
//       const driverLast = driver.split(' ')[1];
  
//       return { firstName: driverFirst, lastName: driverLast };
//     });
//   }

function attributesToPhrase(drivers) {
    const phrase = drivers.map(driver => {
        return `${driver['name']} is from ${driver['hometown']}`   
    })
    return phrase 
}
