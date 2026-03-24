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
function introduce(name: string, age?: number) {
  if (age !== undefined) {
    return `My name is ${name} and I am ${age} years old.`;
  }
  return `My name is ${name}.`;
}

console.log(introduce("dunglv", 30)); // My name is Alice.
console.log(introduce("dunglv")); // My name is Alice.
