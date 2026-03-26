import { useEffect, useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      type="text"
      ref={inputRef}
      onClick={() => inputRef.current?.focus()}
      placeholder="Focus me on load"
    />
  );
};

export default InputFocus;
