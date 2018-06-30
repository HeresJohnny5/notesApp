console.log('Starting app.js');

// Local Module Dependencies
const notes = require('./notes.js');

// NodeJS Module Dependencies
const fs = require('fs');

const requiredArgs = {
  title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  },
  body: {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
  }
}

console.log(requiredArgs.title);

// 3rd Party Module Dependencies
const _ = require('lodash');
const argv = require('yargs')
  .command('list', 'Get all notes')
  .command('read', 'Reading note', {
    title: requiredArgs.title
  })
  .command('add', 'Adding note', {
    title: requiredArgs.title,
    body: requiredArgs.body
  })
  .command('remove', 'Removing note', {
    title: requiredArgs.title
  })
  .help()
  .argv;

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
    let allNotes = notes.listAll();

    console.log(`Printing ${allNotes.length} note(s):`);

    allNotes.forEach(note => notes.logNote(note));
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
