// function identity<T>(arg: T): T {
//   return arg;
// }

// console.log(identity<number>(43));
// console.log(identity<string>("Hello"));

// function getFirst<T>(arr: T[]): T | undefined {
//   return arr[0];
// }

// console.log(getFirst<number>([1, 2, 3]));
// console.log(getFirst(["a", "b", "c"]));
// console.log(getFirst([]));

// function printLength<T extends { length: number }>(item: T): number {
//   return item.length;
// }

// console.log(printLength("hello"));
// console.log(printLength([1, 2, 3, 4]));
// // console.log(printLength(43));

// const str = "hello";
// console.log(str.length);
// // Tương đương với
// // 1. Javascript tạo một String object: new String("hello")
// // 2. Gọi phương thức length trên String object đó: new String("hello").length
// // 3. Trả về 5 và huỷ string object tạm thời

// const strPrimitive = "hello"; // "Primitive"
// const strObject = new String("hello"); // "object"

// console.log(typeof strPrimitive); // "string"
// console.log(typeof strObject); // "object"

// console.log(strPrimitive.length); // 5 (autoboxing)
// console.log(strObject.length); // 5 (truy cập trực tiếp trên object)

interface StringBox {
  content: string;
}

interface NumberBox {
  content: number;
}

interface Box<T> {
  value: T;
}

let numBox: Box<number> = { value: 42 };
let strBox: Box<string> = { value: "Hello" };

console.log(numBox.value);
console.log(strBox.value);
