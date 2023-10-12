/*
  Create an object constructor with the following methods below:
    getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(first, last)
*/

const Person = function(first, last) {
  let firstName = first;
  let lastName = last;

  this.getFullName = function () {
    return `${firstName} ${lastName}`;
  };

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.setFirstName = function(first) {
    return firstName = first;
  };

  this.setLastName = function(last) {
    return lastName = last;
  };

  this.setFullName = function(first, last) {
    this.setFirstName(first);
    this.setLastName(last);

    return this.getFullName();
  };
};

const writer = new Person('James', 'Jarmaine');
writer.setLastName('Bond');

console.log(writer.getFullName());
console.log(writer.getFirstName());
console.log(writer.getLastName());

writer.setFirstName('Vaga');
console.log(writer.getFullName());

writer.setFullName('Tony', 'Stark');
console.log(writer.getFullName());