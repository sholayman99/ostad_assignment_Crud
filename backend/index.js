/**
 * Author: Md Sholayman
 * Description: This is the file where application is running.
 * Date : 24 November,2023.
 */

const app = require("./app");


app.listen(`${process.env.RUNNING_PORT}` , () =>{
    console.log(`App is Listing on PORT ${process.env.RUNNING_PORT}`);
})