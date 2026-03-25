// generic function
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

// generic interface
// interface StringBox {
//   content: string;
// }

// interface NumberBox {
//   content: number;
// }

// interface Box<T> {
//   value: T;
// }

// let numBox: Box<number> = { value: 42 };
// let strBox: Box<string> = { value: "Hello" };

// console.log(numBox.value);
// console.log(strBox.value);

// interface Pair<K, V> {
//   key: K;
//   value: V;
// }

// let test: Pair<string, number> = {
//   key: "hello",
//   value: 30,
// };

// generic function with constraints
// function createPair<K, V>(key: K, value: V): Pair<K, V> {
//   return { key, value };
// }

// const pair1 = createPair<string, number>("age", 30);
// const pair2 = createPair<number, boolean>(42, true);

// console.log(pair1);
// console.log(pair2);

// generic interface with constraints
// interface Container<T extends { id: number }> {
//   item: T;
//   getId(): number;
// }

// const userContainer: Container<{ id: number; name: string }> = {
//   item: { id: 1, name: "Alice" },
//   getId() {
//     return this.item.id;
//   },
// };

// console.log(userContainer.getId());

interface Box<T = string> {
  content: T;
}

const defaultBox: Box = { content: "Hello" }; // T mặc định là string
const numberBox: Box<number> = { content: 42 }; // T được chỉ định là number
