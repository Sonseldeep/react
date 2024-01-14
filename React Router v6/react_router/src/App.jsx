import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Nabbar from "./Nabbar";
import Post from "./Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nabbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* this is for the dynamic page url and param return the index and value
: is dyanic representation for path  */}

          <Route path="/post/:item" element={<Post />} />

          <Route path="*" element={<h3>404 page not found !!</h3>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
