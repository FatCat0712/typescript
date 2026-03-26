import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

type Props = {
  placeholder?: string;
  delay?: number;
  onDebounceChange: (value: string) => void;
  defaultValue?: string;
};

const Searchbar = ({
  placeholder = "Search",
  delay = 300,
  onDebounceChange,
  defaultValue = "",
}: Props) => {
  const [text, setText] = useState(defaultValue);
  const debouncedText = useDebounce(text, delay);

  useEffect(() => {
    onDebounceChange(debouncedText.trim());
  }, [debouncedText, onDebounceChange]);

  return (
    <div className="mb-4 mt-2">
      <input
        type="text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        placeholder={placeholder}
        className="w-96 p-2 rounded border outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 border-gray-700 text-gray-100"
      />
    </div>
  );
};

export default Searchbar;
