const Demo = function(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
};

const john = new Demo('John', 39, 'Male');

let demoJSON = JSON.stringify(john);
let myJSONObject = JSON.parse(demoJSON);
