import { Slogan } from "./Components/Slogan";
import { CurrentTime } from "./Components/CurrentTime";
import { ClockHeading } from "./Components/ClockHeading";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <center>
        <ClockHeading />
        <Slogan />
        <CurrentTime />
      </center>
    </>
  );
}

export default App;
