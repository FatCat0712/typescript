let user: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 25,
};

type Task = {
  id: number;
  title: string;
  completed?: boolean;
  assignee: {
    id: number;
    name: string;
  };
};

const task: Task = {
  id: 1,
  title: "Write report",
  assignee: {
    id: 1,
    name: "John",
  },
};

let tasks: Task[] = [
  {
    id: 1,
    title: "Write report",
    assignee: {
      id: 1,
      name: "John",
    },
  },
  {
    id: 2,
    title: "Prepare presentation",
    completed: true,
    assignee: {
      id: 2,
      name: "Dunglv",
    },
  },
];

let completedTasks: Task[] = tasks.filter((task) => task.completed);

console.log(completedTasks); // [{ id: 2, title: "Prepare presentation", completed: true, assignee: { id: 2, name: "Dunglv" } }]

type ApiResponse = [number, string, Task | null];

let response: ApiResponse = [
  200,
  "success",
  {
    id: 1,
    title: "Write report",
    assignee: {
      id: 1,
      name: "John",
    },
  },
];

let responseError: ApiResponse = [404, "Not Found", null];

enum TaskStatus {
  Pending = "PENDING",
  Completed = "COMPLETED",
  Cancelled = "CANCELLED",
}

let myStatus: TaskStatus = TaskStatus.Pending;

console.log(myStatus); // "PENDING"
