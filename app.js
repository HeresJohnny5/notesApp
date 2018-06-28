console.log('Starting app.js');

// Local Module Dependencies
const notes = require('./notes.js');

// NodeJS Module Dependencies
const fs = require('fs');

// 3rd Party Module Dependencies
const _ = require('lodash');
const argv = require('yargs').argv;

let command = argv._[0];
let title = argv.title;
let body = argv.body;

// switch statement solution
// switch(command) {
//   case 'list':
//     console.log('Listing all notes.');
//     break;
//   case 'read':
//     console.log('Reading note');
//     break;
//   case 'add':
//     console.log('Adding new note.');
//     break;
//   case 'remove':
//     console.log('Removing note.');
//     break;
//   default:
//     console.log('Command not recognized.');
// };

// object solution
const invoke = {
  list() {
    notes.listAll();
  },
  read() {
    let requestedNote = notes.readNote(title);

    requestedNote.length !== 0 ? notes.logNote(requestedNote[0]) : console.log('Note not found.');
  },
  add() {
    var note = notes.addNote(title, body);
    note ? notes.logNote(note) : console.log('Note or Body already exists. Please enter a unique note and body.');
  },
  remove() {
    let noteRemoved = notes.removeNote(title);

    noteRemoved ? console.log('Note was removed.') : console.log('Note was not found.');
  },
  default() {
    console.log('Command not recognized.');
  }
};

invoke[command] ? invoke[command]() : invoke['default']();
