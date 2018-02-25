var checks = require('./checkRoom.js')
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log("Which room do you want to Check");
rl.on('line',(line)=>{
    line = parseInt(line);
    var answer = checks.checkForEmptyRoom(line);
if(answer==true){
    console.log("it's empty");
}else{
    console.log("it's filled");
    console.log(answer);
}   
});