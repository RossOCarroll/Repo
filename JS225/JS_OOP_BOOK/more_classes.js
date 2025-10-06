// let database = {
//   getStudentId(name) {
//     // This method should probably access a database
//     return 4201567;
//   }
// };

// class Student {
//   constructor(firstName, lastName, track) {
//     this.name = [firstName, lastName];
//     this.track = track;
//   }

//   // This method shouldn't be public!
//   revealStudentId() {
//     let studentId = database.getStudentId(this.name);
//     console.log(studentId);
//   }
// }

// let student = new Student('Kay', 'Oakley', 'JavaScript');
// console.log(`${student.name.join(' ')} ${student.track}`);
// // Kay Oakley JavaScript

// // Reveals sensitive info about student
// student.revealStudentId(); // 4201567

// student.name = ['Bill', 'Wisner'];
// student.track = 'Ruby';
// console.log(`${student.name.join(' ')} ${student.track}`);

// class Foo {
//   #data;
//   #initializedData = 43;

//   constructor(value) {
//     this.#data = value;
//   }

//   show() {
//     console.log(this.#data, this.#initializedData);
//   }
// }

// let foo = new Foo(42);
// foo.show();


// class Student {
//   #name; 
//   #track;

//   constructor(firstName, lastName, track) {
//     this.#name = [firstName, lastName];
//     this.#track = track;
//   }

//   name() {
//     return this.#name;
//   }

//   track() {
//     return this.#track;
//   }
// }

// let student = new Student('Kay', 'Oakley', 'JavaScript');
// console.log(`${student.name().join(' ')} ${student.track()}`);
// // SyntaxError: Private field '#name' must be declared in an
// // enclosing class

// class MyClass {
//   myPublic() {
//     return this.#myPrivate();
//   }

//   #myPrivate() {
//     return 'This is a private method';
//   }
// }

// const instance = new MyClass();
// console.log(instance.myPublic());  // This is a private method
// console.log(instance.#myPrivate());
// // Error: Private field '#myPrivate' must be declared in an
// // enclosing class


// let database = {
//   getStudentId(name) {
//     // This method should probably access a database
//     return 4201567;
//   }
// };

// class Student {
//   #name; 
//   #track;

//   constructor(firstName, lastName, track) {
//     this.#name = [firstName, lastName];
//     this.#track = track;
//   }

//   #revealStudentId() {
//     let studentId = database.getStudentId(this.#name);
//     console.log(studentId);
//   }
// }

// let student = new Student('Kay', 'Oakley', 'JavaScript');
// student.#revealStudentId(); // Raises an error!


// class Student {
//   constructor(firstName, lastName, track) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.track = track;
//   }

//   get name() {
//     return [this.firstName, this.lastName];
//   }
// }

// let student = new Student('Kay', 'Oakley', 'JavaScript');
// console.log(`${student.name.join(' ')} ${student.track}`);

// let teacher = {
//   firstName: 'Alan',
//   lastName: 'Stone',
//   _students: ['Pete', 'Brian', 'Andrea', 'Beverly', 'Joel'],

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   get students() {
//     return [...this._students];
//   }
// }

// console.log(teacher.fullName);   // Alan Stone

// let students = teacher.students;
// console.log(students);
// // [ 'Pete', 'Brian', 'Andrea', 'Beverly', 'Joel' ]

// students.pop();
// console.log(students);
// // [ 'Pete', 'Brian', 'Andrea', 'Beverly' ]

// console.log(teacher.students);
// // [ 'Pete', 'Brian', 'Andrea', 'Beverly', 'Joel' ]

// class Student {
//   constructor(firstName, lastName, track) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//     this._track = track;
//   }

//   get name() {
//     return [this.firstName, this.lastName];
//   }
  
//   get firstName() {
//     return this._firstName;
//   }

//   get lastName() {
//     return this._lastName;
//   }

//   get track() {
//     return this._track;
//   }

// }

// let student = new Student('Kay', 'Oakley', 'JavaScript');
// console.log(`${student.name.join(' ')} ${student.track}`);
// // Kay Oakley JavaScript
// console.log(`${student.firstName} ${student.lastName}`);
// // Kay Oakley


// class Student {
//   #firstName;
//   #lastName;
//   #track;

//   constructor(firstName, lastName, track) {
//     this.#firstName = firstName;
//     this.#lastName = lastName;
//     this.track = track;
    
//   }

//   get name() {
//     return [this.firstName, this.lastName];
//   }
  
//   get firstName() {
//     return this.#firstName;
//   }

//   get lastName() {
//     return this.#lastName;
//   }

//   get track() {
//     return this.#track;
//   }

//   set track(newTrack) {
//     switch (newTrack) {
//       case 'JavaScript':
//       case 'Python':
//       case 'Ruby':
//         this.#track = newTrack;
//         break;
//       default:
//         throw new Error(`Invalid track: ${newTrack}`)
//     }
//   }
// }


// let student2 = new Student('Kay', 'Oakley', 'JavaScript');
// console.log(`${student2.name.join(' ')} ${student2.track}`);
// // Kay Oakley JavaScript

// let student3 = new Student('Bill', 'Wisner', 'Python');
// console.log(`${student3.name.join(' ')} ${student3.track}`);
// // Bill Wisner Python

// student3.track = 'Ruby';
// console.log(`${student3.name.join(' ')} ${student3.track}`);
// // Bill Wisner Ruby

// student3.track = 'Baaa!';
// console.log(`${student3.name.join(' ')} ${student3.track}`);
// // Invalid track: 'Baaa!'


// class Student {
//   static counter = 0;

//   constructor(name) {
//     this.name = name;
//     Student.counter += 1;
//   }
// }

// console.log(Student.counter);           // 0

// let ken = new Student('Ken');
// console.log(Student.counter);           // 1

// let lynn = new Student('Lynn');
// console.log(Student.counter);  

// class MyClass {
//   static staticMethod() {
//     console.log('This is a static method');
//   }

//   instanceMethod() {
//     console.log('This is a instance method');
//   }
// }

// MyClass.staticMethod();

// const instance = new MyClass();
// instance.instanceMethod();

// class Student {
//   static counter = 0;

//   static showCounter() {
//     console.log(`We have ${Student.counter} students`);
//   }

//   constructor(name) {
//     this.name = name;
//     Student.counter += 1;
//   }
// }

// let ken = new Student('Ken');
// let lynn = new Student('Lynn');
// Student.showCounter(); 


// class Person {
//   #name;
//   #age;

//   constructor(name, age) {
//     this.#name = name;
//     this.age = age;
//   }

//   showAge() {
//     console.log(this.#age);
//   }

//   set age(newAge) {
//     if (newAge < 0 && typeof(newAge) === 'number') {
//       throw new RangeError('RangeError: Age must be positive');
//     } else {
//       this.#age = newAge;
//     }
//   }
// }

// let person = new Person('John', 30);
// person.showAge(); // 30
// person.age = 31;
// person.showAge(); // 31

// try {
//   // This line should raise a RangeError,
//   // but does not.
//   person.age = -5;
//   person.showAge(); // -5
// } catch (e) {
//   // The following line should run, but won't
//   console.log('RangeError: Age must be positive');
// }

// class Book {
//   #title;
//   #author;
//   #year;

//   constructor(title, author, year) {
//     this.#title = title;
//     this.#author = author;
//     this.year = year;
//   }

//   get title() {
//     return this.#title;
//   }

//   get author() {
//     return this.#author;
//   }

//   get year() {
//     return this.#year;
//   }

//   set year(newYear) {
//     if (newYear < 1900) {
//       throw new RangeError('Invalid year');
//     } else {
//       this.#year = newYear;
//     }
//   }
// }

// let book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
// console.log(book.title);  // The Great Gatsby
// console.log(book.author); // F. Scott Fitzgerald
// console.log(book.year);   // 1925

// book.year = 1932;         // Changing year
// console.log(book.year);   // 1932

// try {
//   book.year = 1825;
// } catch (e) {
//   console.log(e);   // RangeError: Invalid year
// }

// try {
//   let book2 = new Book('A Tale of Two Cities', 'Charles Dickens', 1859);
// } catch (e) {
//   console.log(e);   // RangeError: Invalid year
// }

// class BankAccount {
//   #balance;

//   #checkBalance() {
//     console.log(`${this.#balance}`)
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   withdraw(amount) {
//     if (amount > this.#balance) {
//       throw new RangeError('Insufficient funds');
//     } else {
//       this.#balance -= amount;
//     }
//   }
// }

// let account = new BankAccount();
// account.deposit(100);
// account.withdraw(50);


// class Rectangle {
//   #width;
//   #height;

//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   get width() {
//     return this.#width;
//   }

//   get height() {
//     return this.#height
//   }

//   set width(width) {
//     if (width < 1 ) {
//       throw new RangeError('width must be positive')
//     } else {
//       this.#width = width;
//     }
//   }

//   set height(height) {
//     if (height < 1 ) {
//       throw new RangeError('height must be positive')
//     } else {
//       this.#height = height;
//     }
//   }

//   get area() {
//     return this.width * this.height;
//   }
// }

// let rect = new Rectangle(10, 5);
// console.log(rect.area); // 50

// rect.width = 20;
// console.log(rect.area); // 100

// rect.height = 12;
// console.log(rect.area); // 240

// try {
//   rect.width = 0;
// } catch (e) {
//   console.log(e); // RangeError: width must be positive
// }

// try {
//   rect.height = -10;
// } catch (e) {
//   console.log(e); // RangeError: height must be positive
// }

class MathUtils {
  static add(num1, num2) {
    return num1 + num2;
  };

  static subtract(num1, num2) {
    return num1 - num2;
  };

  static multiply(num1, num2) {
    return num1 * num2;
  };

  static divide(num1, num2) {
    if (num1 <= 0 || num2 <= 0) {
      throw new RangeError('Division by zero')
    } else {
      return num1 / num2;
    }
  }
}

console.log(MathUtils.add(5, 3));       // 8
console.log(MathUtils.subtract(10, 4)); // 6
console.log(MathUtils.multiply(6, 7));  // 42
console.log(MathUtils.divide(20, 5));   // 4
console.log(MathUtils.divide(10, 0));   // RangeError: Division by zero