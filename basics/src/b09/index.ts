interface User {
  name: string;
  age: number;
  email: string;
}

const user1: User = {
  name: "Alice",
  age: 30,
  email: "",
};

const user2: Partial<User> = {
  age: 30,
};

function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const user3: User = {
  name: "Bob",
  age: 40,
  email: "bob@example.com",
};

const updatedUser3 = updateUser(user3, { age: 30, name: "dunglv" });

console.log(updatedUser3);
