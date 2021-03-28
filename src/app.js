const yargs = require('yargs')
const { addNotes, listNotes, removeNote } = require("../utils/notes")

const command = process.argv[2];

if (command == "add") {
    console.log("adding a note");
    addNotes(yargs.argv.note);
} 
// --note="add note here"
else if (command == "remove") {
    console.log("removing note...");
    removeNote(yargs.argv.note);
}
else if (command == "list") {
    console.log("all of your reminders:");
    listNotes();
} 
else {
    console.log("command not recognised");
}