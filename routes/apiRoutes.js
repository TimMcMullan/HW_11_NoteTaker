// requirements and router setup
const api = require("express").Router();
// const { v4: uuidv4 } = require('uuid');
// const { v4: uuidv4 } = require('uuid');
const { 
    readFromFile,
    readAndAppend,
    writeToFile, 
} = require("../db/store");

// get notes and display 
api.get("/notes", (req, res) => {
    console.info("Notes received");
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// note id 
api.get('/notes:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile(".db/db.json")
    .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.id === noteID);
            return result.length > 0
                ? res.json(result)
                : res.json('No note with that ID');
        });
});

// DELETE route 
api.delete('/notes:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {

            const result = json.filter((note) => note.id !== noteID);

            writeToFile('.db/db.json', result);

            res.json(`Item ${noteId} has been deleted`);
        });
});

api.post("/notes", (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;


    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };
        readAndAppend(newNote, "./db/db.json");
        res.json("Note added");
    } else {
        res.error("Error in creating Note")
    }

});