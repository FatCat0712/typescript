import React, { useState } from "react";

const InputBox = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>You typed: {value}</p>
    </div>
  );
};

export default InputBox;
