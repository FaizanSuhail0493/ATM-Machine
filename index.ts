#! /usr/bin/env node

//CLI ATM Machine

import inquirer from "inquirer";

console.log (`\n Welcome to Faizan's Commmand Line Interface ATM Machine \n`);

let myBalance = 10000; //Dollars 
const myPin = 1998;
const pinAnswer = await inquirer.prompt([
    
    {   name: "pin",
        type: "number",
        message: "Enter your Pin "
    }
] );

if (pinAnswer.pin === myPin) {
console.log("Access Granted")

const operationsAns = await inquirer.prompt([{
    name: "operations",
    type: "list",
    choices: ["Cash Withdraw", "Fast Cash", "Check Balance"],
    message: "Which Operation you want to perform  "
}])
//Command for Cash Withdrawl Request

if (operationsAns.operations === "Cash Withdraw") {
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                type: "number",
                message: "Enter Your Amount" 
            }
        ]
    ); 
if (amountAns.amount <= myBalance) {
        myBalance = myBalance - amountAns.amount;
        console.log (`\n Your Remaining Balance is $${myBalance} \n`);
} else {
        console.log (`Insuficient Amount Please Recharge First`)
}
//Command for Check Balance Request

    } else if (operationsAns.operations === "Check Balance") {
        console.log (`\n Your current balance is $${myBalance} \n`) 
    } 
// Command for Fast Cash Request

    else if (operationsAns.operations === "Fast Cash") {
        let answer = await inquirer.prompt(
        [
            {
                name: "amountSelect",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"],
                message: "Enter Your Amount"
            }
        ]
    ); 
// Fast Cash Request Options

    if (answer.amountSelect === "1000") {
        myBalance -=1000
        console.log(`\n Your Remaining Balacnce is $${myBalance} \n`);
    } else if (answer.amountSelect === "2000") {
        myBalance -=2000
        console.log(`\n Your Remaining Balacnce is $${myBalance} \n`);

     } else if (answer.amountSelect === "5000") {
        myBalance -=5000
        console.log(`\n Your Remaining Balacnce is $${myBalance} \n`);
     } else if (answer.amountSelect === "10000") {
        myBalance -=10000
        console.log(`\n Your Remaining Balacnce is $${myBalance} \n`);
     } 
    } 
}
// Invadlid Pincode Cammand
    else {
            console.log("Invalid Pin Code")
        }
console.log(`Hope You Like It Please Share your Reviews`)