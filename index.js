// Code your solution in this file.
function lowerCaseDrivers(drivers){
    const array = drivers.map(x => x.toLowerCase())
    return array
}


function nameToAttributes(drivers){
    return drivers.map(function(x){
   const driverFirstName = x.split(" ")[0]
   const driverLastName = x.split(" ")[1]

   return {firstName: driverFirstName, lastName: driverLastName }
})
}

function attributesToPhrase(drivers){
    return drivers.map(x => `${x.name} is from ${x.hometown}`)

}
