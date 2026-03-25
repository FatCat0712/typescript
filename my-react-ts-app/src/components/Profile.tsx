import React, { useState } from "react";

type User = {
  id: number;
  name: string;
};

const Profile = (props: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const [tags, setTags] = useState<string[]>([]);
  const [form, setForm] = useState<{ name: string; password: string }>({
    name: "",
    password: "",
  });

  return <div>{user?.name}</div>;
};

export default Profile;
