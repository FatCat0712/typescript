import "./App.css";
import Button from "./components/Button";
import InputBox from "./components/InputBox";
import LoginForm from "./components/LoginForm";
import SmartButton from "./components/SmartButton";

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
      <LoginForm />
    </>
  );
}

export default App;
