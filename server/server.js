const express = require("express")
const dotenv = require("dotenv")
const path = require("path")


// create application
const app = express()


// load env
dotenv.config()


// all routes
app.get("*", (request, response) => {

    response.sendFile(path.join(__dirname, "../index.html"))

})


// start application
app.listen(process.env.PORT, () => {

    /* eslint "no-console": "off" */
    console.log("Server listening on port %s.", process.env.PORT)

})
