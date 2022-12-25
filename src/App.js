import Home from "./components/Home";
import Create from "./components/Create";
import ReadBlog from "./components/ReadBlog";
import NavbarComponent from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Router>
          <NavbarComponent />
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/" element={<Home />} />
            <Route path="/readBlog/:id" element={<ReadBlog />} />
          </Routes>
        </Router>
      </div>
      {/* <h1> Welcome to the blogging world.</h1> */}
      {/* <button onClick = "{ } ">Create new blog</button> */}
      {/* <Create/> */}
    </div>
  );
}

export default App;
