const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { addNotes, listNotes, removeNote } = require("../utils/notes")

const topLevelQuestion = [
    {
        type: "list", 
        name: "options",
        message: "what would you like to do?", 
        choices: ["add", "remove", "list", "exit"],
    },
];
const addQuestions = [{ type: "input", name: "add", message: "What Would you like me to Add..?"
}];

const removeQuestion = [ 
   { type: "input", name: "remove", message:"what would you like to remove, type the number...?" }  
]
const main = () => {   
console.log(chalk.yellow(figlet.textSync('Your Notes App')));
console.log("starting up the notes app...") 
app();
};

const app = async () => {
    const answers = await inquirer.prompt(topLevelQuestion);

    if (answers.options == "add") {
        const answer = await inquirer.prompt(addQuestions)
        addNotes(answer.add);
        console.log("Adding your note...");
        app();
    } else if ( answers.options == "list") {
        console.log("showing notes...");
        listNotes();
        app();
    } else if (answers.options == "remove"){
        console.log("Removing your Note!!");
        listNotes();
        const answer = await inquirer.prompt(removeQuestion)
        removeNote(answer);
        app();
    } else {
        console.log("Thank you and See you Soon!!");
    }
};

main();
