console.log('Starting app.js');

// Module Dependencies
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

const user = os.userInfo();

// fs.appendFile('message.txt', `Hello ${user.username}`, (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });

console.log(`Hello my name is ${notes.john.name} and I'm ${notes.john.age} years old.`);

notes.john.yearOfBirth();

let total = notes.addNumbers(1, 5);
console.log(total);

let testArray = notes.arrayChunk([1, 2, 3, 4, 5], 2);
console.log(testArray);
