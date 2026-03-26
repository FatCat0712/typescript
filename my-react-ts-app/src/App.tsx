import "./App.css";
import Button from "./components/Button";
import CounterReducer from "./components/CounterReducer";
import InputBox from "./components/InputBox";
import InputFocus from "./components/InputFocus";
import LoginForm from "./components/LoginForm";
import SmartButton from "./components/SmartButton";
import ThemeButton from "./components/ThemeButton";
import Timer from "./components/Timer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const handleLog = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      {/* <SmartButton
        variant="ghost"
        className="bg-yellow-200"
        onClick={handleLog}
      >
        Hello
      </SmartButton> */}
      Hello TS
      {/* <Button>Click me</Button> */}
      {/* <InputBox /> */}
      {/* <LoginForm /> */}
      {/* <InputFocus /> */}
      {/* <Timer /> */}
      {/* <CounterReducer /> */}
      <ThemeProvider>
        <h2>React + TS Context Demo</h2>
        <ThemeButton />
      </ThemeProvider>
    </>
  );
}

export default App;
