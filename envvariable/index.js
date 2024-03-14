//Accessing the environmental variables using dotenv package
require ("dotenv").config()
console.log(process.env.ACCESS_KEY)
console.log(process.env.USER_NAME)