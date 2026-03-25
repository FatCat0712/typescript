import "./App.css";
import SmartButton from "./components/SmartButton";

function App() {
  const handleLog = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <SmartButton
        variant="ghost"
        className="bg-yellow-200"
        onClick={handleLog}
      >
        Hello
      </SmartButton>
    </>
  );
}

export default App;
