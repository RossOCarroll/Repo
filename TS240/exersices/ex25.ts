interface Person {
  name: string;
  age: number;
};

interface Employee extends Person {
  employeeId: number;
}


let bob: Employee = {
  name: 'Bob',
  age: 34,
  employeeId: 45,
}