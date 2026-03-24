// function identity<T>(arg: T): T {
//   return arg;
// }

// console.log(identity<number>(43));
// console.log(identity<string>("Hello"));

function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(getFirst<number>([1, 2, 3]));
console.log(getFirst(["a", "b", "c"]));
console.log(getFirst([]));
