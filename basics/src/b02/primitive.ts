// string

// const courseTitle: string = "Typescript";
// const author = "Dung";

// // template string
// const banner: string = `Course ${courseTitle} by ${author}`;
// console.log(banner);

// ham
// function greet(name: string): string {
//   return `Hello ${name}`;
// }
// console.log(greet("Dung"));

// number
// const version = 1.0;
// const price = 9_9_9;
// const ratio: number = 0.75;

// console.log(price);

// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add("1", 2));

// let isDone: boolean = true;
// let isLoading: boolean = false;

// let a: boolean = true;
// let b: boolean = false;

// console.log(a && b); // && trả về true nếu cả a và b đều là true
// console.log(a || b); // || trả về true nếu ít nhất một trong a hoặc b là true
// console.log(!b); // ! trả về giá trị ngược lại của b

// let isActive: boolean = true;
// if (isActive) {
//   console.log("The feature is active.");
// } else {
//   console.log("The feature is inactive.");
// }

// // Type inference
// let isEnabled = false;

// convert to boolean type
// let value = "";

// console.log(!!value);

// console.log(Boolean(value));

function canSubmitForm(isFilled: boolean, isValid: boolean): boolean {
  return isFilled && isValid;
}

console.log(canSubmitForm(true, true)); // true
console.log(canSubmitForm(true, false));
