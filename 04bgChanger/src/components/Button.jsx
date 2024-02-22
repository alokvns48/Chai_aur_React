import React from "react";

function Button({ color, onClick }) {
  console.log(color);
  return (
    <button
      onClick={() => onClick(color)}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  );
}

export default Button;
