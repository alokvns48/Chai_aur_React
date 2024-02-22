import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("olive");

  const changeBgColor = (color) => {
    setColor(color);
  };

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg py-2 px-3 bg-white rounded-3xl">
            <Button color="Red" onClick={changeBgColor} />
            <Button color="Yellow" onClick={changeBgColor} />
            <Button color="Green" onClick={changeBgColor} />
            <Button color="Blue" onClick={changeBgColor} />
            <Button color="Olive" onClick={changeBgColor} />
            <Button color="Pink" onClick={changeBgColor}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
