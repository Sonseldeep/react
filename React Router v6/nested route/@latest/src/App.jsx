import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Layout from "./Layout";
import Post from "./Post";
import PostLayout from "./PostLayout";
import PostDetail from "./PostDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="post" element={<PostLayout />}>
              <Route path=":category" element={<PostDetail />} />
            </Route>
            {/*
            instead of this use index
             <Route path="/" element={<Home />} /> */}
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
