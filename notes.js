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
  return fetchNotes();
};

let readNote = (title) => {
  let notes = fetchNotes();

  let note = notes.filter(note => note.title === title);

  return note;
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
    console.log('Note added');
    return note;
  };
};

let removeNote = (title) => {
  let notes = fetchNotes();

  let newNotes = notes.filter(note => note.title !== title);

  saveNotes(newNotes);

  return notes.length !== newNotes.length;
};

let logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  listAll,
  readNote,
  addNote,
  removeNote,
  logNote
};
