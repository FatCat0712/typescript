// Pick<T, K> - Creates a new type by picking a set of properties K from type T.
interface User {
  name: string;
  age: number;
  email: string;
}

// type UserSummary = Pick<User, "name" | "email">;

// const newUser: UserSummary = {
//   name: "Alice",
//   email: "alice@example.com",
// };

// Omit<T, K> - Creates a new type by omitting a set of properties K from type T.
// type UserWithoutEmail = Omit<User, "email">;

// const userObject: UserWithoutEmail = {
//   name: "Bob",
//   age: 30,
// };

// console.log(userObject);

//  Exclude<T, U> - Creates a new type by excluding from T all properties that are assignable to U.
// Extract<T, U> - Creates a new type by extracting from T all properties that are assignable to U.
type OrderStatus = "pending" | "approved" | "rejected";
type dataTest = string | number | boolean;

type NonString = Exclude<dataTest, string>; // number | boolean
type NonPendingStatus = Exclude<OrderStatus, "pending">; // "approved" | "rejected"
type PendingStatus = Extract<OrderStatus, "pending">; // "pending"

// const status1: NonPendingStatus = "approved";
// const orderStatus: PendingStatus = "pending";

// const testSting: NonString = true;

// record
type Role = "admin" | "editor" | "viewer";
type UserRole = Record<Role, { id: number; name: string }>;

const userRoles: UserRole = {
  admin: { id: 1, name: "Administrator" },
  editor: { id: 2, name: "Editor" },
  viewer: { id: 3, name: "Viewer" },
};

console.log(userRoles);

// required
interface OptionalUser {
  name?: string;
  age?: number;
}

type RequiredUser = Required<OptionalUser>;

const testUser: OptionalUser = {};

const requiredUser: RequiredUser = {
  name: "Alice",
  age: 30,
};

console.log(requiredUser);
