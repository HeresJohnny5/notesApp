'use strict';

// NodeJS Module Dependencies
const fs = require('fs');

// 3rd Party Module Dependencies
const _ = require('lodash');

const fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
    return [];
  };
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let listAll = () => {
  console.log('Getting all notes.');
};

let readNote = (title) => {
  console.log(`Reading Note: Title - ${title}`);
};

let addNote = (title, body) => {
  // console.log(`Adding Note: Title - ${title}, Body - ${body}`);
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  // [{"title":"Nacho","body":"Donut"}]
  let duplicateNotes = notes.filter((note) => note.title === title || note.body === body);

  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  };
};

let removeNote = (title) => {
  console.log(`Removing Note: Title - ${title}`);
};

module.exports = {
  listAll,
  readNote,
  addNote,
  removeNote,
};
