// 1 union type

// type Task2 = {
//   id: number;
//   title: string;
//   completed: boolean;
// };

// let task2: Task2 | null | string = {
//   id: 1,
//   title: "Learn TypeScript",
//   completed: false,
// };

// task2 = null;
// task2 = "";

// 2 intersection type
// type User = {
//   id: number;
//   name: string;
// };

// type PermissionUser = {
//   role: string;
//   canEdit: boolean;
// };

// type AdminUser = User & PermissionUser;

// let admin: AdminUser = {
//   id: 1,
//   name: "Alice",
//   role: "admin",
//   canEdit: true,
// };

// 3: literal type
type Status = "pending" | "in-progress" | "completed";

let status2: Status = "pending";
