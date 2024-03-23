#! /usr/bin/env node

import inquirer from "inquirer";

// computer will generate a random number

// user input for guesting number

// compare user input with computer generated number and show results


const randomNumber = Math.floor(Math.random() * 6 + 1);



const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);

if(answers.userGuessedNumber === randomNumber){
   console.log("congrulations! you guessed right number!");
   
}else{
    console.log("you guessed right number!");
    
}
    
