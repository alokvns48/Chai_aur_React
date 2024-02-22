import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 mb-4 text-black p-4 rounded-xl">
        Tailwind test
      </h1>
      <Card username="alok" btnValue="Call me"/>
      <Card username="alok pandey"/>
      <Card username="pandeyji"/>
    </>
  );
}

export default App;
