'use strict';

let listAll = () => {
  console.log('Getting all notes.');
};

let readNote = (title) => {
  console.log(`Reading Note: Title - ${title}`);
};

let addNote = (title, body) => {
  console.log(`Adding Note: Title - ${title}, Body - ${body}`);
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
