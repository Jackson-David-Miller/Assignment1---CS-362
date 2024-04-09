import { argv } from 'node:process';
import figlet from 'figlet';

console.log(`${argv[2]}`);


figlet(`${argv[2]}`, function (err, data){
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});