#! /usr/bin/env node



import inquirer from "inquirer";
import chalk from "chalk";

let myBalance =7000;
let myPin =5555;

console.log(chalk.red("\n\twelcome to-ATM MACHINE\n"));

let pinAnswer = await inquirer.prompt([
    {
        name:"pin",
        type:"number",
        message:chalk.yellow("Enter your pin code:")
    }
]);

if(pinAnswer.pin===myPin){//ye bracket close nhi horhi line no 83 tk
    console.log(chalk.blue("\npin is correct,login successfully!\n"))
   // console.log(`your current balance is ${myBalance}`)

    let operationAnswers= await inquirer.prompt([
        {
            name:"operation",
            type:"list",
            message:"Select the operator:",
            choices:["withdraw amount","check balance"]

        }
]); 
        //neechy sara kam tb hoga jb user wthdraw option select kare ga line 78 tk
if(operationAnswers.operation==="withdraw amount"){
    let withdrawAns= await inquirer.prompt([
        {
            name : "withdraw",
            type : "list",
            message : "Choose your method",
            choices : ["Fast cash" ,"Enter amount"]
        }
]); 
//ye sub code fastcash select kare ga to run hoga
if(withdrawAns.withdraw==="Fast cash"){
    let fastcashAns =await inquirer.prompt([
        {
            name: "fastCash",
            type: "list",
            message:"Select Amount",
            choices:["1000","3000","5000","7000","10000" ]
        }
]);
if(fastcashAns.fastCash>myBalance){
    console.log(chalk.green("insufficient Balance"));
   }
else{  
    myBalance -= fastcashAns.fastCash;
    console.log(`${fastcashAns.fastCash} withdraw successfully.`);
    console.log(`your remaiing balance is:${myBalance}`);
    }

}
    //or ye code jb wo enter amount select kare ga tb hoga
else if(withdrawAns.withdraw ==="Enter amount"){
    let amountAns = await inquirer.prompt([
        {
            name :"amount",
            type :"number",
            message:"Enter your amount to withdraw"
        }
]);
if(amountAns.amount > myBalance){
    console.log(chalk.green("Insufficient balance"));
  }
else{
    myBalance -= amountAns.amount;
    console.log(`${amountAns.amount} withdraw sucessfully`);
    console.log(`your remaiing balance is:${myBalance}`);
   }
}
}  
     // ab wo code likhe gai jo run hogfa jb user checkbalance select kare
 else if(operationAnswers.operation==="check balance"){
    console.log(`your account balance is:${myBalance}`);
   }    
} 
// yaha tk ka sara kam tb hoga jb user pin shi enter kare ga 
// ab neeche ka code is liye hai k user pin galat dal de NEECHY WALA Else line 16 k if k bad wala hai k wo cond na ho to ye mesage dena ha phr
else{
    console.log(chalk.green("\nPin is incorrect,try again!\n"));
}