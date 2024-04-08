import { argv } from 'node:process';


console.log(`${val[2]}`);

var figlet = require("figlet");

figlet(`${val[2]}`, function (err, data){
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});