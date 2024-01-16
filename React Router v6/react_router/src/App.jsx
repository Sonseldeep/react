import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Nabbar from "./Nabbar";
import Post from "./Post";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Logout from "./Logout";

function App() {
  let isLogin = false;
  let data = {
    st: "User not login",
  };
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
          <Route path="/post/:item/:id" element={<Post />} />

          <Route path="*" element={<h3>404 page not found !!</h3>} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/dashboard"
            element={
              isLogin ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" replace state={data} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
