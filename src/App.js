import Navbar from "./Navbar.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateForm from "./CreateForm.js";
import BlogDetails from "./BlogDetails.js";
import NotFound from "./NotFound.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateForm />} />
            //Assign id to the blog details route
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
