import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("Azure");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <>
      <button onClick={() => setColor("red")}> Red</button>
      <br />
      <br />

      <button onClick={() => setColor("green")}> Green</button>

      <br />
      <br />
      <button onClick={() => setColor("white")}>White</button>

      <br />
      <br />
      <button onClick={() => setColor("yellow")}>Yello</button>
    </>
  );
}

export default App;
