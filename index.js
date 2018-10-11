const lowerCaseDrivers = drivers => drivers.map(driver => driver.toLowerCase())

const nameToAttributes = drivers => drivers.map(driver => {
   return {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}
})

const attributesToPhrase = drivers => drivers.map(driver => `${driver.name} is from ${driver.hometown}`)