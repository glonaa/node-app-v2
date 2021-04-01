const fs = require("fs");

const loadNotes = () => {
    try {

        const dataBuffer = fs.readFileSync("src/notes.json");

        const notesJson = dataBuffer.toString();

        return JSON.parse(notesJson);
    }   catch (error) {
        return [];
    }
}

const saveNotes = (allNotes) => {
    const notesJson = JSON.stringify(allNotes)
    fs.writeFileSync("src/notes.json", notesJson )
}

//adding notes

const addNotes = (myNote) => {
    const allNotes = loadNotes()
    allNotes.push({ reminder: myNote })
    saveNotes(allNotes);
}

// listing items

const listNotes = () => {
    const allNotes = loadNotes();

    allNotes.map((note, index) => {
        console.log(`${index + 1}. ${note.reminder}`);
    });
}
//removal 

const removeNote = (noteToDelete) => {
    const allNotes = loadNotes();

    try {
        console.log(allNotes);
        // const itemToDelete = noteToDelete -1;
        const removedItem = allNotes.splice(noteToDelete - 1 , 1);
        console.log(removedItem);
console.log(`successfully removed... ${removedItem[0].reminder}`);
    } catch (error) {
        console.log("Number out of range");
    };

    saveNotes(allNotes);
};

module.exports = {
    addNotes,
    listNotes,
    removeNote,
};