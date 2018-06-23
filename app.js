console.log('Starting app.js');

// 3rd Party Module Dependencies
const fs = require('fs');
const _ = require('lodash');

// Local Module Dependencies
const notes = require('./notes.js');

let command = process.argv[2];
console.log('Command:', command);

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
    console.log('Listing all notes.');
  },
  read() {
    console.log('Reading note.');
  },
  add() {
    console.log('Adding new note.');
  },
  remove() {
    console.log('Removing note.');
  },
  default() {
    console.log('Command not recognized.');
  }
};

invoke[command] ? invoke[command]() : invoke['default']();
