import Funfact from "./Funfact";

function App() {
  return (
    <>
      <img
        src="data:image/png;base64,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"
        alt="logo"
      />
      <h1>Fun Facts About React</h1>
      <Funfact />
    </>
  );
}

export default App;
