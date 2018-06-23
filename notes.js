const _ = require('lodash');

const Demo = function(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
};

Demo.prototype.yearOfBirth = function() {
  console.log(2018 - (this.age));
};

module.exports = {};
module.exports.john = new Demo('John', 39, 'Male');
module.exports.addNumbers = (a, b) => a + b;
module.exports.arrayChunk = (array, num) => _.chunk(array, num);
