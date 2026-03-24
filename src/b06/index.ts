// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add(1, 2));

// 2 tham so mac dinh
// function greet(name: string = "Guest", greeting: string = "Hello"): string {
//   return `${greeting}, ${name}!`;
// }

// console.log(greet("dunglv")); // Hello, Guest!
// console.log(greet("dunglv", "Hi")); // Hi, dunglv!

// 3 tham so tuy chon (optional parameters)
// function introduce(name: string, age?: number) {
//   if (age !== undefined) {
//     return `My name is ${name} and I am ${age} years old.`;
//   }
//   return `My name is ${name}.`;
// }

// console.log(introduce("dunglv", 30)); // My name is Alice.
// console.log(introduce("dunglv")); // My name is Alice.

// 1. union type trong tham so va return
// function processInput(input: string | number): string | number {
//   if (typeof input === "string") {
//     return `String input: ${input.toUpperCase()}`;
//   }

//   return `Number input: ${input * 2}`;
// }

// console.log(processInput("hello")); // String input: HELLO
// console.log(processInput(5)); // Number input: 10

// 2. void va never trong function
// function logMessage(message: string): void {
//   console.log(message);
// }

// function throwError(errMess: string): never {
//   throw new Error(errMess);
// }

// throwError("This is a log message."); // This is a log message.

// 3. Function overloading
function combineDemo(a: string, b: string): string;
function combineDemo(a: number, b: number): number;
function combineDemo(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return a + b; // Kết hợp chuỗi
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // Cộng số
  }
  throw new Error("Invalid types");
}

console.log(combineDemo("Hello,", "world!")); // Hello, world!
console.log(combineDemo(5, 10)); // 15
// console.log(combineDemo("Hello", 5)); // Error: Invalid types
