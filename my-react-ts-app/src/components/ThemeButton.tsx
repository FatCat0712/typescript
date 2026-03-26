import useTheme from "../hooks/useTheme";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Current theme: {theme}</button>
    </div>
  );
};

export default ThemeButton;
