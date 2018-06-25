'use strict';

// NodeJS Module Dependencies
const fs = require('fs');

// 3rd Party Module Dependencies
const _ = require('lodash');

let listAll = () => {
  console.log('Getting all notes.');
};

let readNote = (title) => {
  console.log(`Reading Note: Title - ${title}`);
};

let addNote = (title, body) => {
  // console.log(`Adding Note: Title - ${title}, Body - ${body}`);
  let notes = [];
  let note = {
    title,
    body
  };

  try {
    let notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch(e) {

  };

  // [{"title":"Nacho","body":"Donut"}]
  let duplicateNotes = notes.filter((note) => note.title === title || note.body === body);

  if(duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  } else {
    console.log('Note or Body already exists. Please enter a unique note and body.');
  }
};

let removeNote = (title) => {
  console.log(`Removing Note: Title - ${title}`);
};

module.exports = {
  listAll,
  readNote,
  addNote,
  removeNote
};
