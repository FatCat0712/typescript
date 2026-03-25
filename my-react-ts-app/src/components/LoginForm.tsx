import React from "react";

const LoginForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
