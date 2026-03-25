// type ID = string | number;
// let userId: ID = 123;

// type Pet = {
//   name: string;
//   age: number;
// };

// type Animal = {
//   legs: number;
// };

// type Bird = Animal & {
//   wings: number;
// };

// const eagle: Bird = {
//   legs: 2,
//   wings: 2,
// };

// type Point = [number, number];
// const location2: Point = [48.7693, -121.805];

interface User {
  name: string;
  age: number;
}

const person: User = {
  name: "Alice",
  age: 30,
};

interface Employee extends User {
  salary: number;
}

const employee: Employee = {
  name: "Bob",
  age: 40,
  salary: 50000,
};

interface Car {
  model: string;
}

interface Car {
  color: string;
}

const bmw: Car = {
  model: "X5",
  color: "black",
};

interface clickHandler {
  (even: string): void; // call signature
}

const handle: clickHandler = (event) => {
  console.log("Clicked", event);
};
