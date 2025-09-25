let me = {
  firstName: 'Jane',
  lastName: 'Doe',
};

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName)
}

// fullName(me);

let friend = {
  firstName: 'John',
  lastName: 'Smith',
};

// fullName(friend);

let mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

let father = {
  firstName: 'Shane',
  lastName: 'Doe',
};

// fullName(mother);
// fullName(father);

// let people = [];

// people.push(me);
// people.push(friend);
// people.push(mother);
// people.push(father);

// function rollCall(collection) {
//   let length;
//   let i;
//   for (i = 0, length = collection.length; i < length; i++) {
//     fullName(collection[i]);
//   }
// }

// rollCall(people);

// people.forEach(person => {
//   fullName(person);
// })

// function rollCall(collection) {
//   collection.forEach(fullName);
// };

// rollCall(people);

let people = {
  collection: [],
  lastIndex: 0,

  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' && typeof person.lastName !== 'string';
  },

  rollCall: function() {
    this.collection.forEach(people.fullName);
  },

  add: function(newPerson) {
    if (this.isInvalidPerson(newPerson)) {
      return;
    }

    this.lastIndex++;
    newPerson.index = this.lastIndex;
    this.collection.push(newPerson)
  },

  getIndex: function(person) {
    let index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName && 
        comparator.lastName === person.lastName) {
          index = i;
        }
    })

    return index;
  },

  remove: function(person) {
    let index;
    if (this.isInvalidPerson(person)) {
      return;
    }

    index = this.getIndex(person);
    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  }
}

people.add(me);
people.add(friend);
people.add(mother);
people.add(father);

people.rollCall();