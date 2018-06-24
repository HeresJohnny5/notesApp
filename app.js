console.log('Starting app.js');

// 3rd Party Module Dependencies
const fs = require('fs');
const _ = require('lodash');
const argv = require('yargs').argv;

// Local Module Dependencies
const notes = require('./notes.js');

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
    notes.readNote(title);
  },
  add() {
    notes.addNote(title, body);
  },
  remove() {
    notes.removeNote(title);
  },
  default() {
    console.log('Command not recognized.');
  }
};

invoke[command] ? invoke[command]() : invoke['default']();
